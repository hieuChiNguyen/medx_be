import { Type } from 'class-transformer';
import { IsNumber, IsNotEmpty } from 'class-validator';
import { PaginationQueryDto } from './pagination.dto';

export class GetDoctorDetailDto extends PaginationQueryDto {
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  doctorId: number;
}
