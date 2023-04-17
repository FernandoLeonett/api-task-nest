import { MongooseModule } from '@nestjs/mongoose';


import { Module } from '@nestjs/common';
import { DatabaseConnection } from 'src/connection/connectiion';
import { Task, TaskSchema } from 'src/schema/schema';
import { TaskService } from './tasks.service';
import { TaskController } from './tasks.controller';



@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
    MongooseModule.forRootAsync({
      useClass: DatabaseConnection,
    }),
  ],
  controllers: [TaskController],
  providers: [TaskService], 

})
export class TasksModule {}
