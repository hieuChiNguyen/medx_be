module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable('patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      fullName: {
        type: Sequelize.STRING(255),
        field: 'full_name',
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING(10),
        field: 'email',
        allowNull: false,
      },

      phone: {
        type: Sequelize.STRING(20),
        field: 'phone',
        allowNull: false,
      },

      gender: {
        type: Sequelize.STRING(10),
        field: 'gender',
        allowNull: false,
      },

      birthday: {
        type: Sequelize.DATE,
        field: 'birthday',
        allowNull: false,
      },

      avatar: {
        type: Sequelize.STRING,
        field: 'avatar',
        allowNull: true,
      },

      identifyId: {
        type: Sequelize.STRING,
        field: 'identify_id',
        allowNull: true,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
      },
    });
  },

  down: async (queryInterface) => queryInterface.dropTable('patients'),
};
