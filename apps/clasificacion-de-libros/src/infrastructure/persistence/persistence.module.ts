import { Module } from '@nestjs/common';
import { MongoModule } from './mongo/mongo.module';
import { BookService } from './servces/book.service';

@Module({
  imports: [MongoModule],
  controllers: [],
  providers: [BookService],
  exports: [BookService],
})
export class PersistenceModule {}
