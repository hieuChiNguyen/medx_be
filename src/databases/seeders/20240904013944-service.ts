import wrapValuesWithDateTimeServices from '../utils/wrapValuesWithDateTime';

const services = [
  {
    id: 1,
    name: 'Overview Examination',
    image: 'http://service.example.com',
    price: '1.000.000',
    description: '',
  },
];

module.exports = {
  async up(queryInterface) {
    return await queryInterface.bulkInsert('services', wrapValuesWithDateTimeServices(services));
  },

  async down(queryInterface) {
    return await queryInterface.bulkDelete('services', {});
  },
};
