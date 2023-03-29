import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controllers';
import { PersistenceModule } from './persistence/persistence.module';

@Module({
  imports: [PersistenceModule],
  controllers: [UserController],
  providers: [],
})
export class IntrastructureModule {}
