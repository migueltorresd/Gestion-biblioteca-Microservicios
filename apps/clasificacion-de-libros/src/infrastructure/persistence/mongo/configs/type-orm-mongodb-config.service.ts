import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AuthorEntityMongo } from '../entities/autor.entity';
import { BookEntityMongo } from '../entities/book.entity';

/**
 * Este servicio es el encargado de configurar la conexion con la base de datos
 *
 * @export
 * @class TypeOrmMongoDBConfigService // con esto se puede inyectar el servicio
 * @implements {TypeOrmOptionsFactory}
 */
@Injectable()
export class TypeOrmMongoDBConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  /**
   * Este metodo es el encargado de crear las opciones de conexion con la base de datos
   *
   * @return {TypeOrmModuleOptions} // con esto se puede retornar las opciones de conexion
   * @memberof TypeOrmMongoDBConfigService
   */
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mongodb',
      host: this.configService.get<string>('DB_HOST'),
      port: this.configService.get<number>('DB_PORT'),
      database: this.configService.get<string>('DB_NAME_BOOK'),
      authSource: 'admin', // con esto se puede autenticar en la base de datos
      entities: [BookEntityMongo, AuthorEntityMongo], // con esto se pueden agregar las entidades de la base de datos a la conexion
      useUnifiedTopology: true, // con esto podemos usar el nuevo motor de mongodb
      synchronize: false, // con esto podemos sincronizar las entidades con la base de datos
      logging: true, // con esto se puede ver el log de las consultas
      useNewUrlParser: true, // con esto podemos usar el nuevo motor de mongodb
      autoLoadEntities: true, // con esto podemos cargar las entidades automaticamente
    };
  }
}
