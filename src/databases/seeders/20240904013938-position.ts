import wrapValuesWithDateTimePositions from '../utils/wrapValuesWithDateTime';

const positions = [
  {
    id: 1,
    name: 'Master',
    price: '300.000',
    description: 'description example',
  },
];

module.exports = {
  async up(queryInterface) {
    return await queryInterface.bulkInsert('positions', wrapValuesWithDateTimePositions(positions));
  },

  async down(queryInterface) {
    return await queryInterface.bulkDelete('positions', {});
  },
};
