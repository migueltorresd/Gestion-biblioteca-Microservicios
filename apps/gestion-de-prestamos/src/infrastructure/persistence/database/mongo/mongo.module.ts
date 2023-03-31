import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './config/mongo.config';
import { LoanRepository } from './repositories/loan.repository.mongo';
import { UserRepository } from './repositories/user.repository.mongo';
import { loanSchema, LoanSchemaMongo } from './schemas/loan.schema';
import { userSchema, UserSchemaMongo } from './schemas/user.schema';
import { LoanMongoService } from './services/loans.mongo.service';
import { UserMongoService } from './services/user-mongo.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    MongooseModule.forFeature([
      { schema: userSchema, name: UserSchemaMongo.name },
      { schema: loanSchema, name: LoanSchemaMongo.name },
    ]),
  ],
  controllers: [],
  providers: [
    MongooseConfigService,
    UserMongoService,
    LoanMongoService,
    UserRepository,
    LoanRepository,
  ],
  exports: [UserMongoService, UserRepository, LoanMongoService, LoanRepository],
})
export class MongoModule {}
