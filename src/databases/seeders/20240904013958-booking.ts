import wrapValuesWithDateTimeBookings from '../utils/wrapValuesWithDateTime';

const bookings = [{}];

module.exports = {
  async up(queryInterface) {
    return await queryInterface.bulkInsert('bookings', wrapValuesWithDateTimeBookings(bookings));
  },

  async down(queryInterface) {
    return await queryInterface.bulkDelete('bookings', {});
  },
};
