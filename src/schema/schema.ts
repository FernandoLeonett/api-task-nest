import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';
import { TaskCategory } from 'src/tasks/entities/task.entity';




export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task extends Document {
  @Prop({ minlength: 3 })
  title: string;


  @Prop({ required: true, enum: Object.values(TaskCategory) })
  category: TaskCategory;

  @Prop({
    required: true, validate: {
      validator: (date: Date) => date > new Date(),
      message: 'Expiration date must be in the future',
    }
  })
  expiration: Date;


  @Prop({ minlength: 3 })
  description: string;

  @Prop({ default: false })
  completed: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
