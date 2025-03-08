import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1/');

  const config = new DocumentBuilder()
    .setTitle('Pachamama Tour')
    .setDescription('This is the API of Pachamama Tour')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger/', app, documentFactory);

  await app.listen(process.env.PORT ?? 8000);
}
void bootstrap();
