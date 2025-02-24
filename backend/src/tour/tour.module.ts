import { Module } from '@nestjs/common';
import { TourService } from './tour.service';
import { TourController } from './tour.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tour } from './entities/tour.entity';
import { ServicesModule } from 'src/services/services.module';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tour]), ServicesModule, CategoryModule],
  controllers: [TourController],
  providers: [TourService],
})
export class TourModule {}
