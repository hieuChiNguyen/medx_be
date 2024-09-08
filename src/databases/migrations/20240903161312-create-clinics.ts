module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable('clinics', {
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

      address: {
        type: Sequelize.STRING,
        field: 'address',
        allowNull: false,
      },

      image: {
        type: Sequelize.STRING(20),
        field: 'image',
        allowNull: false,
      },

      description: {
        type: Sequelize.STRING(20),
        field: 'description',
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

  down: async (queryInterface) => queryInterface.dropTable('clinics'),
};
