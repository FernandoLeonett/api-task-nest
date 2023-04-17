import { NestFactory } from '@nestjs/core';
import { TasksModule } from './tasks/tasks.module';
import {INestApplication, ValidationPipe} from '@nestjs/common'
import * as dotenv from 'dotenv';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cors from 'cors';


async function generateSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('API de tareas')
    .setDescription('API para crear, actualizar, borrar y listar tareas')
    .setVersion('1.0')
    .addTag('tareas')
    .addServer('/api')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
}


async function bootstrap() {
  dotenv.config()

  const app = await NestFactory.create(TasksModule);
  app.use(cors()); // habilitar CORS
  app.useGlobalPipes(new ValidationPipe())
  await generateSwagger(app); // llamada a la función generateSwagger
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
