import { Module } from '@nestjs/common';
import { LoansController } from './controllers/loans.controllers';
import { UserController } from './controllers/user.controllers';
import { PersistenceModule } from './persistence/persistence.module';

@Module({
  imports: [PersistenceModule],
  controllers: [UserController, LoansController],
  providers: [],
})
export class IntrastructureModule {}
