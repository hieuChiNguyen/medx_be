import wrapValuesWithDateTimeReceptionists from '../utils/wrapValuesWithDateTime';

const receptionists = [
  {
    id: 1,
    username: 'Reception 1',
    email: 'recep1@gmail.com',
    password: '123456',
    clinic_id: 1,
  },
];

module.exports = {
  async up(queryInterface) {
    return await queryInterface.bulkInsert('receptionists', wrapValuesWithDateTimeReceptionists(receptionists));
  },

  async down(queryInterface) {
    return await queryInterface.bulkDelete('receptionists', {});
  },
};
