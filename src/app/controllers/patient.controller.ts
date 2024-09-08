import { Response } from 'express';
import { Service } from 'typedi';
import { BaseController } from './base.controller';
import { Get, JsonController, Res, UseBefore } from 'routing-controllers';
import { GetPagination } from '@decorators/get.pagination.decorator';
import { Pagination } from '@interfaces/pagination.interface';
import adminMiddleware from '@middlewares/admin.middleware';
import PatientService from '@services/patient.service';

@JsonController('/patient')
@Service()
class PatientController extends BaseController {
  constructor(protected patientService: PatientService) {
    super();
  }

  @Get('/')
  @UseBefore(adminMiddleware())
  async getPatients(@GetPagination() pagination: Pagination, @Res() res: Response) {
    const patients = await this.patientService.getPatients(pagination);
    return this.setData(patients).setMessage('success').responseSuccess(res);
  }
}

export default PatientController;
