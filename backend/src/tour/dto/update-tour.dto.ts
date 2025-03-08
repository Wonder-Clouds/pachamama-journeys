import { IsBoolean, IsDecimal, IsOptional, IsString } from 'class-validator';

export class UpdateTourDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  location: string;

  @IsString()
  @IsOptional()
  time: string;

  @IsDecimal()
  @IsOptional()
  price: number;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  category: string;

  @IsOptional()
  @IsString({ each: true })
  images: string[];

  @IsString()
  @IsOptional()
  cover: string;

  @IsBoolean()
  @IsOptional()
  status: boolean;
}
