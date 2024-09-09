import { Service } from 'typedi';
import { LoginInterface } from '@interfaces/auth.interface';
import { BadRequestError } from 'routing-controllers';
import { createJwtToken } from '@common/utils/util';
import bcrypt from 'bcrypt';
import Doctor from '@models/entities/doctors.entity';
import Receptionist from '@models/entities/receptionists.entity';

@Service()
class AuthService {
  constructor() {}
  async loginDoctor(params: LoginInterface) {
    const { email, password } = params;

    const doctor = await Doctor.findOne({ where: { email } });
    if (!doctor) {
      throw new BadRequestError('Doctor does not exist');
    }

    const checkPassword = await bcrypt.compare(password, doctor.password);

    if (!checkPassword) {
      throw new BadRequestError('Password is incorrect');
    }

    return createJwtToken(doctor.id, doctor.email);
  }

  async loginReceptionist(params: LoginInterface) {
    const { email, password } = params;

    const receptionist = await Receptionist.findOne({ where: { email } });
    if (!receptionist) {
      throw new BadRequestError('Receptionist does not exist');
    }

    const checkPassword = await bcrypt.compare(password, receptionist.password);

    if (!checkPassword) {
      throw new BadRequestError('Password is incorrect');
    }

    return createJwtToken(receptionist.id, receptionist.email);
  }
}

export default AuthService;
