import wrapValuesWithDateTimeSpecialties from '../utils/wrapValuesWithDateTime';

const specialties = [
  {
    id: 1,
    name: 'Specialty Example',
    image: 'http://specialty.example.com',
    description: 'Specialty description',
  },
];

module.exports = {
  async up(queryInterface) {
    return await queryInterface.bulkInsert('specialties', wrapValuesWithDateTimeSpecialties(specialties));
  },

  async down(queryInterface) {
    return await queryInterface.bulkDelete('specialties', {});
  },
};
