import wrapValuesWithDateTimeClinics from '../utils/wrapValuesWithDateTime';

const clinics = [
  {
    id: 1,
    name: 'Clinic 1',
    address: 'Phuong Mai, Ha Noi',
    image: 'http://clinic.example.com',
    description: 'Clinic description',
  },
];

module.exports = {
  async up(queryInterface) {
    return await queryInterface.bulkInsert('clinics', wrapValuesWithDateTimeClinics(clinics));
  },

  async down(queryInterface) {
    return await queryInterface.bulkDelete('clinics', {});
  },
};
