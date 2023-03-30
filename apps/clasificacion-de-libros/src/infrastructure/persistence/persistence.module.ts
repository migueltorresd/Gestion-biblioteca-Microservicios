import { Module } from '@nestjs/common';
import { MongoModule } from './mongo/mongo.module';
import { BookService } from './servces/book.service';

/**
 * Este modulo se encarga de la inyeccion de dependencias del
 * modulo de la base de datos y de los servicios de persistencia
 *
 * @export
 * @class PersistenceModule
 */
@Module({
  imports: [MongoModule],
  controllers: [],
  providers: [BookService],
  exports: [BookService],
})
export class PersistenceModule {}
