import { NextFunction, Response } from 'express';
import { HttpException } from '@exceptions/http.exception';
import { RequestWithUser } from '@interfaces/auth.interface';
import Doctor from '@models/entities/doctors.entity';
import Patient from '@models/entities/patients.entity';
import Receptionist from '@models/entities/receptionists.entity';
import { RoleEnum } from '@enum/role.enum';

// Authorization
function checkRole(role: RoleEnum) {
  return (req: RequestWithUser, res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(new HttpException(401, 'User not authenticated'));
    }

    const isAuthorized =
      (role === RoleEnum.DOCTOR && req.user instanceof Doctor) ||
      (role === RoleEnum.PATIENT && req.user instanceof Patient) ||
      (role === RoleEnum.RECEPTIONIST && req.user instanceof Receptionist);

    if (!isAuthorized) {
      return next(new HttpException(403, 'Forbidden: Access denied for your role'));
    }

    next();
  };
}

export { checkRole };
