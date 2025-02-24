import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const category = this.categoryRepository.create(createCategoryDto);
      return await this.categoryRepository.save(category);
    } catch {
      throw new InternalServerErrorException('Error to create new Category');
    }
  }

  async findAll() {
    try {
      return await this.categoryRepository.find();
    } catch {
      throw new InternalServerErrorException('Error to get all Category');
    }
  }

  async findOne(id: string) {
    try {
      return await this.categoryRepository.findOneBy({ id: id });
    } catch {
      throw new NotFoundException(`Not found Category with id: ${id}`);
    }
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryRepository.findOneBy({ id: id });

    if (!category) {
      throw new NotFoundException(`Not found Category with id: ${id}`);
    }
    try {
      await this.categoryRepository.update(id, updateCategoryDto);
      return await this.categoryRepository.findOneBy({ id: id });
    } catch {
      throw new InternalServerErrorException(
        `Error updating the Category with id: ${id}`,
      );
    }
  }

  async remove(id: string) {
    const category = await this.categoryRepository.findOneBy({ id: id });

    if (!category) {
      throw new NotFoundException(`Not found Category with id: ${id}`);
    }

    try {
      await this.categoryRepository.softDelete(id);
      return { message: `Category with id ${id} successfully deleted` };
    } catch {
      throw new InternalServerErrorException(
        `Error deleting the Category with id: ${id}`,
      );
    }
  }
}
