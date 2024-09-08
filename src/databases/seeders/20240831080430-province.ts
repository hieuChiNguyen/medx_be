import wrapValuesWithDateTimeProvinces from '../utils/wrapValuesWithDateTime';

const provinces = [
  {
    id: '01',
    fullName: 'Thành phố Hà Nội',
  },
  {
    id: '02',
    fullName: 'Tỉnh Hà Giang',
  },
  {
    id: '04',
    fullName: 'Tỉnh Cao Bằng',
  },
  {
    id: '06',
    fullName: 'Tỉnh Bắc Kạn',
  },
  {
    id: '08',
    fullName: 'Tỉnh Tuyên Quang',
  },
  {
    id: '10',
    fullName: 'Tỉnh Lào Cai',
  },
];

module.exports = {
  async up(queryInterface) {
    return await queryInterface.bulkInsert('provinces', wrapValuesWithDateTimeProvinces(provinces));
  },

  async down(queryInterface) {
    return await queryInterface.bulkDelete('provinces', {
      id: provinces.map((province) => province.id),
    });
  },
};
