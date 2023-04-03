import { Module } from '@nestjs/common';
import { LoanService } from '../services/loan.service';
import { UserService } from '../services/user.service';
import { MongoModule } from './database/mongo/mongo.module';

/**
 * Este es el módulo de persistencia que se encarga de
 * inyectar los servicios de persistencia y el módulo de la base de datos
 *
 * @export
 * @class PersistenceModule
 * @typedef {PersistenceModule}
 */
@Module({
  imports: [MongoModule],
  controllers: [],
  exports: [UserService, LoanService],
  providers: [UserService, LoanService],
})
export class PersistenceModule {}
