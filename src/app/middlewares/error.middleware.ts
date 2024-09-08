import { HttpException } from '@exceptions/http.exception';
import { Request, Response } from 'express';
import { env } from '@env';
import { ApiResponse } from '@interfaces/response.interface';

const errorMiddleware = (error: HttpException, req: Request, res: Response) => {
  const code = error.status || 500;
  const message = error.message || 'middleware.something_wrong';

  const result: ApiResponse = {
    status: false,
    code: code,
    message: message,
    data: {},
  };
  const stack = error.stack;
  if (env.node == 'development') return res.status(code).send({ ...result, stack });
  return res.status(code).send(result);
};

export default errorMiddleware;
