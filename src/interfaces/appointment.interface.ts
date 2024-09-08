export interface CreateAppointmentInterface {
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  birthday: Date;
  time: Date;
  status: string;
  reason: string;
}

export interface CreateAppointmentForOtherInterface extends CreateAppointmentInterface {
  name: string;
  relationship: string;
  patientId: number;
}
