module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable('doctor_specialty_clinic', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      doctorId: {
        type: Sequelize.INTEGER,
        field: 'doctor_id',
        allowNull: false,
        references: { model: 'doctors', key: 'id' },
      },

      specialtyId: {
        type: Sequelize.INTEGER,
        field: 'specialty_id',
        allowNull: false,
        references: { model: 'specialties', key: 'id' },
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

  down: async (queryInterface) => queryInterface.dropTable('doctor_specialty_clinic'),
};
