import { Module } from '@nestjs/common';
import { LoansController } from './controllers/loans.controllers';
import { UserController } from './controllers/user.controllers';
import { PersistenceModule } from './persistence/persistence.module';
import { MessagingModule } from './messaging/messaging.module';

@Module({
  imports: [PersistenceModule, MessagingModule],
  controllers: [UserController, LoansController],
  providers: [],
})
export class IntrastructureModule {}
