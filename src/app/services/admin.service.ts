import { Service } from 'typedi';
import { LoginInterface } from '@interfaces/auth.interface';
import Admin from '@models/entities/admins.entity';
import { BadRequestError } from 'routing-controllers';
import bcrypt from 'bcrypt';
import { createJwtToken } from '@common/utils/util';

@Service()
class AdminService {
  constructor() {}
  async loginAdmin(params: LoginInterface) {
    const { email, password } = params;
    const admin = await Admin.findOne({ where: { email } });
    if (!admin) {
      throw new BadRequestError('Email does not exist');
    }

    const checkPassword = await bcrypt.compare(password, admin.password);

    if (!checkPassword) {
      throw new BadRequestError('Password is incorrect');
    }

    return createJwtToken(admin.id, admin.email);
  }
}

export default AdminService;
