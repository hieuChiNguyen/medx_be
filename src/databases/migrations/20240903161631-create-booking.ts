module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable('bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      patientId: {
        type: Sequelize.INTEGER,
        field: 'patient_id',
        allowNull: false,
        references: { model: 'patients', key: 'id' },
      },

      serviceId: {
        type: Sequelize.INTEGER,
        field: 'service_id',
        allowNull: false,
        references: { model: 'services', key: 'id' },
      },

      appointmentDate: {
        type: Sequelize.DATE,
        field: 'appointment_date',
        allowNull: false,
      },

      status: {
        type: Sequelize.STRING(20),
        field: 'status',
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

  down: async (queryInterface) => queryInterface.dropTable('bookings'),
};
