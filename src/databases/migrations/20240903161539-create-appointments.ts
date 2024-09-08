module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable('appointments', {
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

      doctorId: {
        type: Sequelize.INTEGER,
        field: 'doctor_id',
        allowNull: false,
        references: { model: 'doctors', key: 'id' },
      },

      time: {
        type: Sequelize.DATE,
        field: 'time',
        allowNull: false,
      },

      status: {
        type: Sequelize.STRING(20),
        field: 'status',
        allowNull: false,
      },

      reason: {
        type: Sequelize.STRING,
        field: 'reason',
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

  down: async (queryInterface) => queryInterface.dropTable('appointments'),
};
