import { Module } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { MongoModule } from './database/mongo/mongo.module';

@Module({
  imports: [MongoModule],
  controllers: [],
  providers: [UserService],
  exports: [UserService],
})
export class PersistenceModule {}
