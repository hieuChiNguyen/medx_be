import { IsAlreadyExist } from '@decorators/is.exist.decorator';
import Admin from '@models/entities/admins.entity';
import { IsNotEmpty, IsString } from 'class-validator';

export class AdminLoginDto {
  @IsNotEmpty()
  @IsAlreadyExist(Admin, 'email')
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
