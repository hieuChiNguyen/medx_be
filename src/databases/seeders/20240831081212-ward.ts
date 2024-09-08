import wrapValuesWithDateTimeWards from '../utils/wrapValuesWithDateTime';

const wards = [
  {
    id: '00001',
    fullName: 'Phường Phúc Xá',
    district_id: '001',
  },
  {
    id: '00004',
    fullName: 'Phường Trúc Bạch',
    district_id: '001',
  },
  {
    id: '00006',
    fullName: 'Phường Vĩnh Phúc',
    district_id: '001',
  },
  {
    id: '00007',
    fullName: 'Phường Cống Vị',
    district_id: '001',
  },
  {
    id: '00008',
    fullName: 'Phường Liễu Giai',
    district_id: '001',
  },
  {
    id: '00181',
    fullName: 'Phường Văn Miếu',
    district_id: '006',
  },
  {
    id: '00184',
    fullName: 'Phường Quốc Tử Giám',
    district_id: '006',
  },
  {
    id: '00190',
    fullName: 'Phường Ô Chợ Dừa',
    district_id: '006',
  },
];

module.exports = {
  async up(queryInterface) {
    return await queryInterface.bulkInsert('wards', wrapValuesWithDateTimeWards(wards));
  },

  async down(queryInterface) {
    return await queryInterface.bulkDelete('wards', {
      id: wards.map((ward) => ward.id),
    });
  },
};
