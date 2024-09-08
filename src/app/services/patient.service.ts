import { HttpException } from '@common/exceptions/http.exception';
import { Pagination } from '@interfaces/pagination.interface';
import { CreatePatientInterface } from '@interfaces/patient.interface';
import Address from '@models/entities/address.entity';
import Patient from '@models/entities/patients.entity';
import DB from '@models/index';
import { Service } from 'typedi';

@Service()
class PatientService {
  constructor() {}

  async createNewPatient(body: CreatePatientInterface) {
    const isExistedEmail = await this.checkExistPatient(body.email);

    if (isExistedEmail) {
      const patient = await this.getPatientByEmail(body.email);
      return patient;
    }

    const transaction = await DB.sequelize.transaction();

    try {
      const newPatient = await Patient.create(body, { transaction });

      await transaction.commit();

      return newPatient;
    } catch (error) {
      transaction.rollback();

      throw new HttpException(400, error.message);
    }
  }

  async checkExistPatient(email: string) {
    const existedPatient = await this.getPatientByEmail(email);

    if (existedPatient) return true;
    return false;
  }

  async getPatientByEmail(email: string) {
    const existedPatient = await Patient.findOne({
      where: { email },
    });

    if (!existedPatient) return null;

    return existedPatient;
  }

  async getPatients(pagination: Pagination) {
    const { skip, limit, sort } = pagination;

    const { count, rows: patients } = await Patient.findAndCountAll({
      include: [
        {
          model: Address,
          as: 'address',
          required: false,
          attributes: ['addressId'],
        },
      ],
      distinct: true,
      order: sort,
      offset: skip,
      limit: limit,
    });

    return {
      patients,
      total: count,
    };
  }
}

export default PatientService;
