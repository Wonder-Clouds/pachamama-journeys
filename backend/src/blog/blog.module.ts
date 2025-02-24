import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import { ServicesModule } from 'src/services/services.module';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [TypeOrmModule.forFeature([Blog]), ServicesModule, CategoryModule],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
