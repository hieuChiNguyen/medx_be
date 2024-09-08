import Admin from '@models/entities/admins.entity';
import { Request } from 'express';

export interface AdminLoginInterface {
  username: string;
  password: string;
}

export interface DataStoredInJwtToken {
  id: number;
}

export interface RequestWithAdmin extends Request {
  admin?: Admin;
}
