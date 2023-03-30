import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmMongoDBConfigService } from './configs/type-orm-mongodb-config.service';
import { BookEntityMongo } from './entities/book.entity';
import { BookRepository } from './repositories/book.repository.mongo';
import { BookMongoService } from './services/book-mongo.service';

/**
 * Este modulo se encarga de la configuracion de la base de datos mongo
 * y de la inyeccion de dependencias de los servicios, repositorios de mongo
 * y de la configuracion de la base de datos por typeorm
 * @export
 * @class MongoModule
 */
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmMongoDBConfigService,
    }),
    TypeOrmModule.forFeature([BookEntityMongo]),
  ],
  controllers: [],
  providers: [TypeOrmMongoDBConfigService, BookMongoService, BookRepository],
  exports: [BookMongoService, BookRepository],
})
export class MongoModule {}
