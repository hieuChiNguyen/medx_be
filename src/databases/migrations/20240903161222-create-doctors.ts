module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable('doctors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      fullName: {
        type: Sequelize.STRING,
        field: 'full_name',
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING,
        field: 'full_name',
        allowNull: false,
      },

      password: {
        type: Sequelize.STRING(20),
        field: 'password',
        allowNull: false,
      },

      phone: {
        type: Sequelize.STRING(20),
        field: 'phone',
        allowNull: false,
      },

      active: {
        type: Sequelize.BOOLEAN,
        field: 'active',
        allowNull: false,
      },

      avatar: {
        type: Sequelize.STRING,
        field: 'avatar',
        allowNull: false,
      },

      citizenNumber: {
        type: Sequelize.STRING,
        field: 'citizen_number',
        allowNull: false,
      },

      positionId: {
        type: Sequelize.INTEGER,
        field: 'position_id',
        allowNull: false,
        references: { model: 'positions', key: 'id' },
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

  down: async (queryInterface) => queryInterface.dropTable('doctors'),
};
