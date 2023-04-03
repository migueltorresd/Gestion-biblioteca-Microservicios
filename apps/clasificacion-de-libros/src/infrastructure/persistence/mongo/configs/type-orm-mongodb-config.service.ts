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
  /**
   * Este contructor es el encargado de inyectar el servicio de configuracion
   * de la base de datos
   *
   * @constructor
   * @param {ConfigService} configService
   */
  constructor(private readonly configService: ConfigService) {}

  /**
   * Este metodo es el encargado de crear las opciones de conexion con la base de datos
   *
   * @param {type} [type] // con esto se puede especificar el tipo de conexion
   * @param {host} [host] // con esto se puede especificar el host de la base de datos
   * @param {port} [port] // con esto se puede especificar el puerto de la base de datos
   * @param {username} [username] // con esto se puede especificar el usuario de la base de datos
   * @param {password} [password] // con esto se puede especificar la contraseña de la base de datos
   * @param {database} [database] // con esto se puede especificar la base de datos
   * @param {authSource} [authSource] // con esto se puede especificar la fuente de autenticacion
   * @param {entities} [entities] // con esto se puede especificar las entidades de la base de datos
   * @param {useUnifiedTopology} [useUnifiedTopology] // con esto se puede especificar si se usa el nuevo motor de mongodb
   * @param {synchronize} [synchronize] // con esto se puede especificar si se sincroniza las entidades con la base de datos
   * @param {logging} [logging] // con esto se puede especificar si se muestra el log de las consultas
   * @param {useNewUrlParser} [useNewUrlParser] // con esto se puede especificar si se usa el nuevo motor de mongodb
   * @param {autoLoadEntities} [autoLoadEntities] // con esto se puede especificar si se cargan las entidades automaticamente
   * @return {TypeOrmModuleOptions} // con esto se puede retornar las opciones de conexion
   * @memberof TypeOrmMongoDBConfigService
   */
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      username: 'root',
      password: 'password',
      database: 'Sistema_de_Gestion_bibloteca',
      authSource: 'admin',
      entities: [BookEntityMongo, AuthorEntityMongo],
      useUnifiedTopology: true,
      synchronize: false,
      logging: true,
      useNewUrlParser: true,
      autoLoadEntities: true,
    };
  }
}
