module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable('settings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      key: {
        allowNull: false,
        field: 'key',
        type: Sequelize.ENUM('setting_key'),
      },

      value: {
        type: Sequelize.TEXT,
        field: 'value',
        allowNull: false,
      },

      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
        allowNull: false,
      },
    });
  },

  down: async (QueryInterface) => await QueryInterface.dropTable('settings'),
};
