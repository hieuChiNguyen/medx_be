import wrapValuesWithDateTimeSettings from '../utils/wrapValuesWithDateTime';

const settings = [
  {
    id: 1,
    key: 'setting_key',
    value: JSON.stringify({
      example: 1,
    }),
  },
];

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('settings', wrapValuesWithDateTimeSettings(settings));
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('settings', {
      id: settings.map((item) => item.id),
    });
  },
};
