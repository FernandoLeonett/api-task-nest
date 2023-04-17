import { IsNotEmpty, IsString, IsEnum, MinLength, Validate } from 'class-validator';
import { TaskCategory } from '../entities/task.entity';



function isExpirationDateFuture(date: Date) {
  const currentDate = new Date();
const expirationDate = new Date(date);
  
  return expirationDate > currentDate;
}

export class CreateTaskDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsEnum(TaskCategory)
  category: TaskCategory;

  @IsNotEmpty()
 
  @Validate(isExpirationDateFuture, { message: 'Expiration date must be in the future valitated in create dto' })
  expiration: Date;

  @IsString()
  @MinLength(3)
  description: string;
}
