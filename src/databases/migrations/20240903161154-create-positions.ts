module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable('positions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      name: {
        type: Sequelize.STRING,
        field: 'name',
        allowNull: false,
      },

      price: {
        type: Sequelize.STRING,
        field: 'price',
        allowNull: true,
      },

      description: {
        type: Sequelize.TEXT,
        field: 'description',
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

  down: async (queryInterface) => queryInterface.dropTable('positions'),
};
