module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable('districts', {
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

      provinceId: {
        type: Sequelize.STRING(10),
        field: 'province_id',
        allowNull: false,
        references: { model: 'provinces', key: 'id' },
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

  down: async (queryInterface) => queryInterface.dropTable('districts'),
};
