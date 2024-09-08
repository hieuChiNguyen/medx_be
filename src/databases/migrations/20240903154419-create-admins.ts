module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable('admins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      username: {
        type: Sequelize.STRING(255),
        field: 'username',
        allowNull: false,
      },

      password: {
        type: Sequelize.STRING(255),
        field: 'password',
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING(255),
        field: 'email',
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

  down: async (queryInterface) => queryInterface.dropTable('admins'),
};
