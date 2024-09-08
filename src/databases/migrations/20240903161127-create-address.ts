module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable('address', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      provinceId: {
        type: Sequelize.STRING(10),
        field: 'province_id',
        allowNull: false,
        references: { model: 'provinces', key: 'id' },
      },

      districtId: {
        type: Sequelize.STRING(10),
        field: 'district_id',
        allowNull: false,
        references: { model: 'districts', key: 'id' },
      },

      wardId: {
        type: Sequelize.STRING(10),
        field: 'ward_id',
        allowNull: false,
        references: { model: 'wards', key: 'id' },
      },

      patientId: {
        type: Sequelize.INTEGER,
        field: 'patient_id',
        allowNull: false,
        references: { model: 'patients', key: 'id' },
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

  down: async (queryInterface) => queryInterface.dropTable('address'),
};
