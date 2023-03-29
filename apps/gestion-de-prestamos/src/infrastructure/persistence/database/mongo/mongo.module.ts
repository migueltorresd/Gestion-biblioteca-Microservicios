import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDomainModel } from 'apps/gestion-de-prestamos/src/domain/models/user.model';
import { MongooseConfigService } from './config/mongo.config';
import { UserRepository } from './repositories/user.repository.mongo';
import { userSchema, UserSchemaMongo } from './schemas/user.schema';
import { UserMongoService } from './services/user-mongo.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    MongooseModule.forFeature([
      { schema: userSchema, name: UserSchemaMongo.name },
    ]),
  ],
  controllers: [],
  providers: [MongooseConfigService, UserMongoService, UserRepository],
  exports: [UserMongoService, UserRepository],
})
export class MongoModule {}
