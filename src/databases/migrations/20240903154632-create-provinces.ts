module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable('provinces', {
      id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: Sequelize.STRING(10),
      },

      fullName: {
        type: Sequelize.STRING(255),
        field: 'full_name',
        allowNull: false,
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

  down: async (queryInterface) => queryInterface.dropTable('provinces'),
};
