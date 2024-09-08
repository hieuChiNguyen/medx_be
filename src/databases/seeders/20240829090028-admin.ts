import wrapValuesWithDateTimeAdmins from '../utils/wrapValuesWithDateTime';
import bcrypt from 'bcrypt';

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const admins = [
  {
    username: 'admin',
    password: bcrypt.hashSync('123456', salt),
    email: 'admin@gmail.com',
  },
];

module.exports = {
  async up(queryInterface) {
    return await queryInterface.bulkInsert('admins', wrapValuesWithDateTimeAdmins(admins));
  },

  async down(queryInterface) {
    return await queryInterface.bulkDelete('admins', {});
  },
};
