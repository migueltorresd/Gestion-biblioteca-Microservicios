import { Module } from '@nestjs/common';
import { ClassificationController } from './controllers/classification.controller';
import { MessagingModule } from './messaging/messaging.module';
import { PersistenceModule } from './persistence/persistence.module';

/**
 * Este modulo se encarga de la inyeccion de dependencias de los
 * modulos de persistencia y mensajeria y de los controladores
 *
 * @export
 * @class IntrastructureModule
 */
@Module({
  imports: [PersistenceModule, MessagingModule],
  controllers: [ClassificationController],
  providers: [],
})
export class IntrastructureModule {}
