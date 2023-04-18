import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';

export class DatabaseConnection implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      // uri:"mongodb://127.0.0.1:27017/nestjs",
      uri: process.env.MONGODB_URL,
      useNewUrlParser: true,
    };
  }
}
