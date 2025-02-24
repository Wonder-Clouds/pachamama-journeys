import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import { Repository } from 'typeorm';
import { ServicesService } from 'src/services/services.service';
import { Category } from 'src/category/entities/category.entity';
import { TypeCategory } from 'src/utils/enums/category.enum';
import { validate as isUUID } from 'uuid';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private readonly servicesService: ServicesService,
  ) {}

  async create(createBlogDto: CreateBlogDto, cover: Express.Multer.File) {
    let coverPath: string = '';
    try {
      const category = await this.categoryRepository.findOne({
        where: {
          name: createBlogDto.category,
          type: TypeCategory.BLOG,
        },
      });

      if (!category) {
        throw new NotFoundException(
          'Category not found or is not of type BLOG',
        );
      }

      if (cover) {
        const imagePaths = await this.servicesService.uploadImages(
          cover,
          'blog/cover',
        );
        coverPath = imagePaths[0];
      }

      const blogData = {
        ...createBlogDto,
        cover: coverPath,
        category: category,
      };

      const newBlog = this.blogRepository.create(blogData);
      return await this.blogRepository.save(newBlog);
    } catch {
      throw new InternalServerErrorException('Error to create new blog');
    }
  }

  async findAll() {
    try {
      return await this.blogRepository.find({
        relations: {
          category: true,
        },
      });
    } catch {
      throw new InternalServerErrorException('Error to get all Blog');
    }
  }

  async findOne(id: string) {
    try {
      return await this.blogRepository.findOne({
        where: { id },
        relations: ['category'],
      });
    } catch {
      throw new NotFoundException(`Not found Blog with id: ${id}`);
    }
  }

  async update(
    id: string,
    updateBlogDto: UpdateBlogDto,
    image?: Express.Multer.File,
  ) {
    const blog = await this.blogRepository.findOne({
      where: { id },
      relations: ['category'],
    });

    if (!blog) {
      throw new NotFoundException(`Not found Blog with id: ${id}`);
    }

    try {
      let category = blog.category;
      if (updateBlogDto.category) {
        const categoryWhere = isUUID(updateBlogDto.category)
          ? { id: updateBlogDto.category, type: TypeCategory.BLOG }
          : { name: updateBlogDto.category, type: TypeCategory.BLOG };

        category = await this.categoryRepository.findOne({
          where: categoryWhere,
        });

        if (!category) {
          throw new NotFoundException(
            'Category not found or is not of type BLOG',
          );
        }
      }

      let coverImage = blog.cover;
      if (image) {
        const imagePaths = await this.servicesService.uploadImages(
          image,
          'blog/images',
        );
        coverImage = imagePaths[0];
      }

      const updateData = {
        ...blog,
        ...updateBlogDto,
        cover: coverImage,
        category: category,
      };

      await this.blogRepository.save(updateData);
      return await this.blogRepository.findOne({
        where: { id },
        relations: ['category'],
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error updating Blog');
    }
  }

  async remove(id: string) {
    const blog = await this.blogRepository.findOneBy({ id: id });

    if (!blog) {
      throw new NotFoundException(`Not found Blog with id: ${id}`);
    }

    try {
      await this.blogRepository.softDelete(id);
      return { message: `Blog with id ${id} successfully deleted` };
    } catch {
      throw new InternalServerErrorException(
        `Error deleting the Blog with id: ${id}`,
      );
    }
  }
}
