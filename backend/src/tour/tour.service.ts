import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tour } from './entities/tour.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/category/entities/category.entity';
import { ServicesService } from 'src/services/services.service';
import { TypeCategory } from 'src/utils/enums/category.enum';

@Injectable()
export class TourService {
  constructor(
    @InjectRepository(Tour)
    private readonly tourRepository: Repository<Tour>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private readonly servicesService: ServicesService,
  ) {}

  async create(
    createTourDto: CreateTourDto,
    gallery: Express.Multer.File[],
    cover: Express.Multer.File,
  ) {
    let coverPath: string = '';
    let galleryPath: string[] = [];

    try {
      const category = await this.categoryRepository.findOne({
        where: {
          name: createTourDto.category,
          type: TypeCategory.TOUR,
        },
      });

      if (!category) {
        throw new NotFoundException('Category not found or is not type TOUR');
      }

      if (cover) {
        const coverPaths = await this.servicesService.uploadImages(
          cover,
          'tour/cover',
        );

        coverPath = coverPaths[0];
      }

      if (gallery) {
        galleryPath = await this.servicesService.uploadImages(
          gallery,
          'tour/gallery',
        );
      }

      const tourData = {
        ...createTourDto,
        cover: coverPath,
        category: category,
        gallery: galleryPath,
      };

      const newTour = this.tourRepository.create(tourData);
      return await this.tourRepository.save(newTour);
    } catch {
      throw new InternalServerErrorException('Error to create new Tour');
    }
  }

  async findAll() {
    try {
      return await this.tourRepository.find({
        relations: {
          category: true,
        },
      });
    } catch {
      throw new InternalServerErrorException('Error to get all Tour');
    }
  }

  async findOne(id: string) {
    try {
      return await this.tourRepository.findOne({
        where: { id },
        relations: ['category'],
      });
    } catch {
      throw new NotFoundException(`Not found Tour with id ${id}`);
    }
  }

  async update(
    id: string,
    updateTourDto: UpdateTourDto,
    gallery?: Express.Multer.File[],
    cover?: Express.Multer.File,
  ) {
    let coverPath: string | undefined;
    let galleryPath: string[] = [];

    try {
      const tour = await this.tourRepository.findOne({ where: { id } });
      if (!tour) {
        throw new NotFoundException('Tour not found');
      }

      const category = await this.categoryRepository.findOne({
        where: {
          name: updateTourDto.category,
          type: TypeCategory.TOUR,
        },
      });

      if (!category) {
        throw new NotFoundException('Category not found or is not type TOUR');
      }

      if (cover) {
        const coverPaths = await this.servicesService.uploadImages(
          cover,
          'tour/cover',
        );
        coverPath = coverPaths[0];
      }

      if (gallery) {
        galleryPath = await this.servicesService.uploadImages(
          gallery,
          'tour/gallery',
        );
      }

      const updatedTour = {
        ...tour,
        ...updateTourDto,
        cover: coverPath ?? tour.cover,
        category: category,
        gallery: galleryPath.length > 0 ? galleryPath : tour.gallery,
      };

      return await this.tourRepository.save(updatedTour);
    } catch {
      throw new InternalServerErrorException('Error updating Tour');
    }
  }

  async remove(id: string) {
    const tour = await this.tourRepository.findOneBy({ id: id });

    if (!tour) {
      throw new NotFoundException(`Not found Tour with id: ${id}`);
    }

    try {
      await this.tourRepository.softDelete(id);
      return { message: `Tour with id ${id} successfully deleted` };
    } catch {
      throw new InternalServerErrorException(
        `Error deleting the Tour with id: ${id}`,
      );
    }
  }
}
