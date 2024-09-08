import { HttpException } from '@common/exceptions/http.exception';
import Registration from '@models/entities/registration.entity';
import DB from '@models/index';
import { Service } from 'typedi';

@Service()
class RegistrationService {
  constructor() {}

  async createNewRegistration(name: string, relationship: string, patientId: number) {
    const transaction = await DB.sequelize.transaction();

    try {
      const registrationData = {
        name,
        relationship,
        patientId,
      };

      const newRegistration = await Registration.create(registrationData, { transaction });

      await transaction.commit();

      return newRegistration;
    } catch (error) {
      transaction.rollback();

      throw new HttpException(400, error.message);
    }
  }
}

export default RegistrationService;
