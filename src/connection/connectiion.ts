import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';

export class DatabaseConnection implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: process.env.CONEXION,
      useNewUrlParser: true,
    };
  }
}
