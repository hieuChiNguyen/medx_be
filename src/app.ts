import 'reflect-metadata';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import DB from '@models/index';
import { logger, stream } from '@utils/logger';
import { useExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';
import path from 'path';
import errorMiddleware from '@middlewares/error.middleware';
import { env } from '@env';

class App {
  public app: express.Application = express();
  public env: string;
  public port: string | number;

  constructor() {
    this.env = env.node || 'development';
    this.port = env.app.port || 3000;

    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`=================================`);
      logger.info(`======= ENV: ${this.env} =======`);
      logger.info(`🚀 App listening on the port ${this.port}`);
      logger.info(`=================================`);
    });
  }

  public getServer() {
    return this.app;
  }

  private connectToDatabase() {
    DB.sequelize.authenticate();
    // DB.sequelize.sync({ force: false });
  }

  private initializeMiddlewares() {
    this.app.use(morgan(env.log.format, { stream }));
    this.app.use(cors({ origin: env.cors.origin, credentials: env.cors.credentials }));
    this.app.use(hpp());
    this.app.use(
      helmet({
        crossOriginOpenerPolicy: false,
        crossOriginResourcePolicy: false,
      }),
    );
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    this.app.use(express.static(path.join(__dirname, '/public')));
  }

  private initializeRoutes() {
    useContainer(Container);
    useExpressServer(this.app, {
      defaultErrorHandler: false,
      routePrefix: '/api/v1',
      middlewares: [path.join(__dirname, '/app/middlewares/*')],
      controllers: [path.join(__dirname, '/app/controllers/*')],
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;
