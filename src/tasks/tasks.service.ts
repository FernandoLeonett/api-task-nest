import { Injectable, BadRequestException, NotFoundException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import * as moment from 'moment';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  constructor(@InjectModel(Task.name) private readonly taskModel: Model<Task>) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    try {
      const createdTask = new this.taskModel(createTaskDto);
      return await createdTask.save();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateTaskDto: Partial<Task>): Promise<Task> {
    try {
      const task = await this.taskModel.findById(id);
      if (!task) {
        throw new NotFoundException(`Task with id ${id} not found`);
      }
      Object.assign(task, updateTaskDto);
      return await task.save();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(): Promise<Task[]> {
    try {
      return await this.taskModel.find().exec();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findById(id: string): Promise<Task> {
    try {
      const task = await this.taskModel.findById(id);
      if (!task) {
        throw new NotFoundException(`Task with id ${id} not found`);
      }
      return task;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findByCategory(category: string): Promise<Task[]> {
    try {
      return await this.taskModel.find({ category }).exec();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }






  
    


  async deleteById(id: string): Promise<void> {
    try {
      await this.taskModel.findByIdAndDelete(id).exec();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
