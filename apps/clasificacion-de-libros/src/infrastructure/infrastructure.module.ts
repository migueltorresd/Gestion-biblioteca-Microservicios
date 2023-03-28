import { Module } from '@nestjs/common';
import { ClassificationController } from './controllers/classification.controller';
import { MessagingModule } from './messaging/messaging.module';
import { PersistenceModule } from './persistence/persistence.module';

@Module({
  imports: [PersistenceModule, MessagingModule],
  controllers: [ClassificationController],
  providers: [],
})
export class IntrastructureModule {}
