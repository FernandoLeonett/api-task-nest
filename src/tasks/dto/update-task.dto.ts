import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { TaskCategory } from '../entities/task.entity';



export class UpdateTaskDto  {

    id: string
    title?: string
    category?: TaskCategory
    expiration?: Date
    description?: string
    completed?: boolean 
}
