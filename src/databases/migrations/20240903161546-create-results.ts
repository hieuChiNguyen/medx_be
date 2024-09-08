module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable('results', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      diagnose: {
        type: Sequelize.TEXT,
        field: 'diagnose',
        allowNull: false,
      },

      resultFile: {
        type: Sequelize.STRING,
        field: 'result_file',
        allowNull: false,
      },

      appointmentId: {
        type: Sequelize.INTEGER,
        field: 'appointment_id',
        allowNull: false,
        references: { model: 'appointments', key: 'id' },
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

  down: async (queryInterface) => queryInterface.dropTable('results'),
};
