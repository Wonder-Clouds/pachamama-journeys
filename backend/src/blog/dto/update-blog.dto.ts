import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';

export class UpdateBlogDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  content: string;

  @IsString()
  @IsOptional()
  cover: string;

  @IsString()
  @IsOptional()
  category: string;

  @IsBoolean()
  @IsOptional()
  status: boolean;

  @IsDate()
  @IsOptional()
  publication: Date;
}
