import { Injectable } from '@nestjs/common';
import { BookMongoService } from '../mongo/services/book-mongo.services';

@Injectable()
export class BookService extends BookMongoService {}
