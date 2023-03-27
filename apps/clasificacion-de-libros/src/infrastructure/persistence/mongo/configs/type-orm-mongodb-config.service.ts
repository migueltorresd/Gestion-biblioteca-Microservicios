import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BookEntityMongo } from '../entities/book.entity';

@Injectable()
export class TypeOrmMongoDBConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mongodb',
      host: this.configService.get<string>('DB_HOST'),
      port: this.configService.get<number>('DB_PORT'),
      database: this.configService.get<string>('DB_NAME_BOOK'),
      authSource: 'admin', // con esto se puede autenticar en la base de datos
      entities: [BookEntityMongo], // con esto se pueden agregar las entidades
      useUnifiedTopology: true, // con esto podemos usar el nuevo motor de mongodb
      synchronize: false, // con esto podemos sincronizar las entidades con la base de datos
      logging: true, // con esto se puede ver el log de las consultas
      useNewUrlParser: true, // con esto podemos usar el nuevo motor de mongodb
      autoLoadEntities: true, // con esto podemos cargar las entidades automaticamente
    };
  }
}
