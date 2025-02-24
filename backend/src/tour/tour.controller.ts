import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { TourService } from './tour.service';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('tour')
export class TourController {
  constructor(private readonly tourService: TourService) {}

  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'cover', maxCount: 1 },
      { name: 'gallery', maxCount: 10 },
    ]),
  )
  @Post()
  create(
    @Body() createTourDto: CreateTourDto,
    @UploadedFiles()
    files: { cover?: Express.Multer.File; gallery?: Express.Multer.File[] },
  ) {
    const cover = files.cover ? files.cover : undefined;
    const gallery = files.gallery || [];
    return this.tourService.create(createTourDto, gallery, cover);
  }

  @Get()
  findAll() {
    return this.tourService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tourService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'gallery', maxCount: 10 },
      { name: 'cover', maxCount: 1 },
    ]),
  )
  async update(
    @Param('id') id: string,
    @Body() updateTourDto: UpdateTourDto,
    @UploadedFiles()
    files: { gallery?: Express.Multer.File[]; cover?: Express.Multer.File[] },
  ) {
    const gallery = files?.gallery ? files.gallery : [];
    const cover = files?.cover ? files.cover[0] : undefined;
    return this.tourService.update(id, updateTourDto, gallery, cover);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tourService.remove(id);
  }
}
