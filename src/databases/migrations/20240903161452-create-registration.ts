module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable('registrations', {
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

      relationship: {
        type: Sequelize.STRING,
        field: 'relationship',
        allowNull: false,
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

  down: async (queryInterface) => queryInterface.dropTable('registrations'),
};
