import { Injectable } from '@nestjs/common';
import { BookMongoService } from './infrastructure/persistence/mongo/services/book-mongo.services';

@Injectable()
export class BookService extends BookMongoService {}
