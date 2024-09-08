import wrapValuesWithDateTimeDoctors from '../utils/wrapValuesWithDateTime';

const doctors = [
  {
    id: 1,
    full_name: 'Nguyen Van A',
    email: 'doctor1@gmail.com',
    password: '123456',
    phone: 'Male',
    active: true,
    avatar: 'http://doctor.example.com',
    citizen_number: '001202002789',
    description: 'Doctor description',
  },
];

module.exports = {
  async up(queryInterface) {
    return await queryInterface.bulkInsert('doctors', wrapValuesWithDateTimeDoctors(doctors));
  },

  async down(queryInterface) {
    return await queryInterface.bulkDelete('doctors', {});
  },
};
