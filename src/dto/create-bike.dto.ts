import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateBikeDto {
  @IsNotEmpty()
  @IsString()
  make: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsNumber()
  year: number;

  @IsNotEmpty()
  @IsString()
  type: string;
}
