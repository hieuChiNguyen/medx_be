module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable('receptionists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      username: {
        type: Sequelize.STRING,
        field: 'username',
        allowNull: false,
      },

      password: {
        type: Sequelize.STRING,
        field: 'password',
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING,
        field: 'email',
        allowNull: false,
      },

      clinicId: {
        type: Sequelize.INTEGER,
        field: 'clinic_id',
        allowNull: false,
        references: { model: 'clinics', key: 'id' },
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

  down: async (queryInterface) => queryInterface.dropTable('receptionists'),
};
