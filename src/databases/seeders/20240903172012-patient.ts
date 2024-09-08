import wrapValuesWithDateTimePatients from '../utils/wrapValuesWithDateTime';

const patients = [
  {
    id: 1,
    full_name: 'Nguyen Van A',
    email: 'a@gmail.com',
    phone: '03698210856',
    gender: 'Male',
    birthday: '17-07-2000',
    avatar: 'http://avatar.example.com',
    identify_id: 'abc123',
  },
];

module.exports = {
  async up(queryInterface) {
    return await queryInterface.bulkInsert('patients', wrapValuesWithDateTimePatients(patients));
  },

  async down(queryInterface) {
    return await queryInterface.bulkDelete('patients', {});
  },
};
