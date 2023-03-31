import { Module } from '@nestjs/common';
import { LoanService } from '../services/loan.service';
import { UserService } from '../services/user.service';
import { MongoModule } from './database/mongo/mongo.module';

@Module({
  imports: [MongoModule],
  controllers: [],
  exports: [UserService, LoanService],
  providers: [UserService, LoanService],
})
export class PersistenceModule {}
