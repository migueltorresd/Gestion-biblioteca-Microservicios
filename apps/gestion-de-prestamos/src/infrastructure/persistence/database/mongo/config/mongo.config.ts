import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  host = this.configService.get('DB_HOST');
  port = this.configService.get('DB_PORT');
  username = this.configService.get('DB_USER');
  password = this.configService.get('DB_PASSWORD');
  database = this.configService.get('DB_NAME_BOOK');
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: 'mongodb://root:password@localhost:27017',
      dbName: this.database,
    };
  }
}
