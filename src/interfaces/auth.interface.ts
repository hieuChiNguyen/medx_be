import Admin from '@models/entities/admins.entity';
import Doctor from '@models/entities/doctors.entity';
import Patient from '@models/entities/patients.entity';
import Receptionist from '@models/entities/receptionists.entity';
import { Request } from 'express';

export type User = Doctor | Patient | Receptionist;

export interface LoginInterface {
  email: string;
  password: string;
}

export interface DataStoredInJwtToken {
  id: number;
}

export interface RequestWithUser extends Request {
  user?: User; // user maybe Doctor, Patient or Receptionist
}

export interface RequestWithAdmin extends Request {
  admin?: Admin;
}
