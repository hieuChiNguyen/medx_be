import { CreateAppointmentForOtherInterface, CreateAppointmentInterface } from '@interfaces/appointment.interface';
import { Service } from 'typedi';
import PatientService from './patient.service';
import { HttpException } from '@common/exceptions/http.exception';
import DB from '@models/index';
import Appointment from '@models/entities/appointments.entity';
import Patient from '@models/entities/patients.entity';
import Doctor from '@models/entities/doctors.entity';
import RegistrationService from './registration.service';
import { Pagination } from '@interfaces/pagination.interface';

@Service()
class AppointmentService {
  constructor(
    private readonly patientService: PatientService,
    private readonly registrationService: RegistrationService,
  ) {}

  async createAppointment(body: CreateAppointmentInterface) {
    const { status, time, reason, ...patientData } = body;

    const patient = await this.patientService.createNewPatient(patientData);

    const transaction = await DB.sequelize.transaction();

    try {
      const appointmentData = {
        status,
        time,
        reason,
      };

      const newAppointment = await Appointment.create(appointmentData, { transaction });

      await transaction.commit();

      return {
        newAppointment,
        patient,
      };
    } catch (error) {
      transaction.rollback();

      throw new HttpException(400, error.message);
    }
  }

  async getAppointment(pagination: Pagination) {
    const { skip, limit, sort } = pagination;

    const { count, rows: appointments } = await Appointment.findAndCountAll({
      include: [
        {
          model: Patient,
          as: 'patient',
          required: true,
          attributes: ['patientId'],
        },
        {
          model: Doctor,
          as: 'doctor',
          required: false,
          attributes: ['doctorId'],
        },
      ],
      distinct: true,
      order: sort,
      offset: skip,
      limit: limit,
    });

    return {
      appointments,
      total: count,
    };
  }

  async getDetailAppointment(appointmentId: number) {
    const appointment = await Appointment.findOne({
      where: {
        id: appointmentId,
      },
    });

    return appointment;
  }

  async createAppointmentForOther(body: CreateAppointmentForOtherInterface) {
    const { name, relationship, patientId, ...createAppointment } = body;

    const newRegistration = await this.registrationService.createNewRegistration(name, relationship, patientId);

    const { newAppointment, patient } = await this.createAppointment(createAppointment);

    return {
      newAppointment,
      patient,
      registration: newRegistration,
    };
  }
}

export default AppointmentService;
