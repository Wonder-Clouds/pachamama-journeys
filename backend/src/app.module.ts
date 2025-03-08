import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { BlogModule } from './blog/blog.module';
import { ServicesService } from './services/services.service';
import { ServicesModule } from './services/services.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TourModule } from './tour/tour.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: parseInt(process.env.PORT_DATABASE),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    CategoryModule,
    BlogModule,
    ServicesModule,
    TourModule,
  ],
  controllers: [],
  providers: [ServicesService],
})
export class AppModule {}
