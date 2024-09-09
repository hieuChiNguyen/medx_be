import { Response } from 'express';
import { Service } from 'typedi';
import { BaseController } from './base.controller';
import { Body, JsonController, Post, Res } from 'routing-controllers';
import { AdminLoginDto } from '@dtos/admin.dto';
import AdminService from '@services/admin.service';

@JsonController('/admin')
@Service()
class AdminController extends BaseController {
  constructor(protected adminService: AdminService) {
    super();
  }

  @Post('/login')
  async login(@Body() adminLoginDto: AdminLoginDto, @Res() res: Response) {
    const jwtToken = await this.adminService.loginAdmin(adminLoginDto);
    return this.setData({ jwtToken }).setMessage('Success').responseSuccess(res);
  }

  @Post('logout')
  async logout(@Res() res: Response) {
    return this.setData('').setMessage('success').responseSuccess(res);
  }
}

export default AdminController;
