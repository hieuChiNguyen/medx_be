import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { HttpException } from '@exceptions/http.exception';
import { DataStoredInJwtToken, RequestWithAdmin } from '@interfaces/auth.interface';
import { env } from '@env';
import AdminEntity from '@models/entities/admins.entity';
import { logger } from '@common/utils/logger';

function adminMiddleware() {
  return async (req: RequestWithAdmin, res: Response, next: NextFunction) => {
    try {
      const Authorization =
        req.cookies['Authorization'] ||
        (req.header('Authorization') ? req.header('Authorization').split('Bearer ')[1] : null);

      if (!Authorization) {
        next(new HttpException(401, 'Authentication token missing'));
      }

      const secretKey: string = env.auth.adminJwtSecret;

      const verificationResponse = verify(Authorization, secretKey) as DataStoredInJwtToken;

      const adminId = verificationResponse.id;

      const admin = await AdminEntity.findByPk(adminId);

      if (admin) {
        req.admin = admin;

        next();
      } else {
        next(new HttpException(401, 'Wrong authentication token'));
      }
    } catch (error) {
      logger.error(`Authentication failed: ${error.message}`);
      next(new HttpException(401, error.message));
    }
  };
}

export default adminMiddleware;
