import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { HttpException } from '@exceptions/http.exception';
import { DataStoredInJwtToken, RequestWithUser } from '@interfaces/auth.interface';
import { env } from '@env';
import Doctor from '@models/entities/doctors.entity';
import Patient from '@models/entities/patients.entity';
import Receptionist from '@models/entities/receptionists.entity';
import { logger } from '@common/utils/logger';

function authMiddleware() {
  return async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const Authorization =
        req.cookies['Authorization'] ||
        (req.header('Authorization') ? req.header('Authorization').split('Bearer ')[1] : null);

      if (!Authorization) {
        next(new HttpException(401, 'Authentication token missing'));
      }

      const secretKey: string = env.auth.jwtSecret;

      const verificationResponse = verify(Authorization, secretKey) as DataStoredInJwtToken;

      const userId = verificationResponse.id;

      const user =
        (await Doctor.findByPk(userId)) || (await Patient.findByPk(userId)) || (await Receptionist.findByPk(userId));

      if (user) {
        req.user = user;

        next();
      } else {
        next(new HttpException(401, 'Wrong authentication token'));
      }
    } catch (error) {
      logger.error(`Authentication failed: ${error.message}`);
      next(new HttpException(401, 'Wrong authentication token'));
    }
  };
}

export default authMiddleware;
