import wrapValuesWithDateTimeDistricts from '../utils/wrapValuesWithDateTime';

const districts = [
  {
    id: '001',
    fullName: 'Quận Ba Đình',
    province_id: '01',
  },
  {
    id: '002',
    fullName: 'Quận Hoàn Kiếm',
    province_id: '01',
  },
  {
    id: '003',
    fullName: 'Quận Tây Hồ',
    province_id: '01',
  },
  {
    id: '004',
    fullName: 'Quận Long Biên',
    province_id: '01',
  },
  {
    id: '005',
    fullName: 'Quận Cầu Giấy',
    province_id: '01',
  },
  {
    id: '006',
    fullName: 'Quận Đống Đa',
    province_id: '01',
  },
  {
    id: '007',
    fullName: 'Quận Hai Bà Trưng',
    province_id: '01',
  },
  {
    id: '008',
    fullName: 'Quận Hoàng Mai',
    province_id: '01',
  },
  {
    id: '009',
    fullName: 'Quận Thanh Xuân',
    province_id: '01',
  },
];

module.exports = {
  async up(queryInterface) {
    return await queryInterface.bulkInsert('districts', wrapValuesWithDateTimeDistricts(districts));
  },

  async down(queryInterface) {
    return await queryInterface.bulkDelete('districts', {
      id: districts.map((district) => district.id),
    });
  },
};
