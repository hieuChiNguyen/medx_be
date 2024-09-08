import { Service } from 'typedi';
import { HttpException } from '@common/exceptions/http.exception';
import Doctor from '@models/entities/doctors.entity';
import { Pagination } from '@interfaces/pagination.interface';
import { GetDoctorDetailInterface } from '@interfaces/doctor.interface';

@Service()
class DoctorService {
  constructor() {}
  async getDoctors(pagination: Pagination) {
    const { skip, limit, sort } = pagination;
    const listDoctors = await Doctor.findAll({
      order: sort,
      offset: skip,
      limit: limit,
    });

    return listDoctors;
  }

  async getDetailDoctor(params: GetDoctorDetailInterface) {
    const doctor = await Doctor.findOne({
      where: {
        id: params.doctorId,
      },
    });

    if (!doctor) {
      throw new HttpException(404, 'services.doctor.doctor_not_found');
    }

    return doctor;
  }

  async updateResult() {}

  async createNewDoctor() {}

  async activateDoctorAccount() {}
}

export default DoctorService;
