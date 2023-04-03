import { Module } from '@nestjs/common';
import { LoansController } from './controllers/loans.controllers';
import { UserController } from './controllers/user.controllers';
import { PersistenceModule } from './persistence/persistence.module';
import { MessagingModule } from './messaging/messaging.module';

/**
 * Este es el módulo de infraestructura que se encarga de
 * inyectar los módulos de persistencia y de mensajeria
 *
 * @export
 * @class IntrastructureModule
 * @typedef {IntrastructureModule}
 */
@Module({
  imports: [PersistenceModule, MessagingModule],
  controllers: [UserController, LoansController],
  providers: [],
})
export class IntrastructureModule {}
