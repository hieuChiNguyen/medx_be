import { Response } from 'express';
import { Service } from 'typedi';
import { BaseController } from './base.controller';
import { Body, Get, JsonController, Post, QueryParams, Res, UseBefore } from 'routing-controllers';
import AppointmentService from '@services/appointment.service';
import validationMiddleware from '@middlewares/validation.middleware';
import { CreateAppointmentDto, CreateAppointmentForOtherDto, GetDetailAppointmentDto } from '@dtos/appointment.dto';
import { GetPagination } from '@decorators/get.pagination.decorator';
import { Pagination } from '@interfaces/pagination.interface';

@JsonController('/appointment')
@Service()
class AppointmentController extends BaseController {
  constructor(protected appointmentService: AppointmentService) {
    super();
  }

  @Post('/create')
  @UseBefore(validationMiddleware(CreateAppointmentDto, 'body'))
  async createAppointment(@Body() createAppointmentDto: CreateAppointmentDto, @Res() res: Response) {
    const newAppointment = await this.appointmentService.createAppointment(createAppointmentDto);
    return this.setData(newAppointment).setMessage('success').responseSuccess(res);
  }

  @Post('/create/for-other')
  @UseBefore(validationMiddleware(CreateAppointmentForOtherDto, 'body'))
  async createAppointmentForOther(
    @Body() createAppointmentForOtherDto: CreateAppointmentForOtherDto,
    @Res() res: Response,
  ) {
    const newAppointment = await this.appointmentService.createAppointmentForOther(createAppointmentForOtherDto);
    return this.setData(newAppointment).setMessage('success').responseSuccess(res);
  }

  @Get('/')
  async getAppointment(@GetPagination() pagination: Pagination, @Res() res: Response) {
    const appointment = await this.appointmentService.getAppointment(pagination);
    return this.setData(appointment).setMessage('success').responseSuccess(res);
  }

  @Get('/detail')
  @UseBefore(validationMiddleware(GetDetailAppointmentDto, 'query'))
  async getDetailAppointment(@QueryParams() detailAppointmentDto: GetDetailAppointmentDto, @Res() res: Response) {
    const detailAppointment = await this.appointmentService.getDetailAppointment(detailAppointmentDto.appointmentId);
    return this.setData(detailAppointment).setMessage('success').responseSuccess(res);
  }
}

export default AppointmentController;
