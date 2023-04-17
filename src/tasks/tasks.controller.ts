import { Controller, Get, Post, Put, Delete, Body, Param, Query, Logger } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskService } from './tasks.service';
import { Task } from './entities/task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(id, updateTaskDto);
  }

  @Get()
  findAllTasks() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findTaskById(@Param('id') id: string) {
    return this.taskService.findById(id);
  }

  @Get('category/:categoryId')
  findTasksByCategory(@Param('categoryId') categoryId: string) {
    return this.taskService.findByCategory(categoryId);
  }



 

  @Delete(':id')
  deleteTaskById(@Param('id') id: string) {
    return this.taskService.deleteById(id);
  }
}
