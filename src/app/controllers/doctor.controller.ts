import { Response } from 'express';
import { Service } from 'typedi';
import { BaseController } from './base.controller';
import { Body, Get, JsonController, Post, QueryParams, Res, UseBefore } from 'routing-controllers';
import { GetPagination } from '@decorators/get.pagination.decorator';
import { Pagination } from '@interfaces/pagination.interface';
import adminMiddleware from '@middlewares/admin.middleware';
import DoctorService from '@services/doctor.service';
import { GetDoctorDetailDto } from '@dtos/doctor.dto';
import AuthService from '@services/auth.service';
import { LoginDto } from '@dtos/auth.dto';

@JsonController('/doctor')
@Service()
class DoctorController extends BaseController {
  constructor(
    protected doctorService: DoctorService,
    protected authService: AuthService,
  ) {
    super();
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    console.log('haha::', loginDto);
    const jwtToken = await this.authService.loginDoctor(loginDto);
    return this.setData({ jwtToken }).setMessage('success').responseSuccess(res);
  }

  @Get('/')
  @UseBefore(adminMiddleware())
  async getDoctors(@GetPagination() pagination: Pagination, @Res() res: Response) {
    const doctors = await this.doctorService.getDoctors(pagination);
    return this.setData(doctors).setMessage('success').responseSuccess(res);
  }

  @Get('/detail')
  async getDetailDoctors(@QueryParams() getDoctorDetailDto: GetDoctorDetailDto, @Res() res: Response) {
    const doctor = await this.doctorService.getDetailDoctor(getDoctorDetailDto);
    return this.setData(doctor).setMessage('success').responseSuccess(res);
  }
}

export default DoctorController;
