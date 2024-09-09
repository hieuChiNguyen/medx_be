import { Response } from 'express';
import { Service } from 'typedi';
import { BaseController } from './base.controller';
import { Body, JsonController, Post, Res } from 'routing-controllers';
import DoctorService from '@services/doctor.service';
import AuthService from '@services/auth.service';
import { LoginDto } from '@dtos/auth.dto';

@JsonController('/receptionist')
@Service()
class ReceptionistController extends BaseController {
  constructor(
    protected doctorService: DoctorService,
    protected authService: AuthService,
  ) {
    super();
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    const jwtToken = await this.authService.loginReceptionist(loginDto);
    return this.setData({ jwtToken }).setMessage('Success').responseSuccess(res);
  }
}

export default ReceptionistController;
