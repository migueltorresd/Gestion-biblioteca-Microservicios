import { InjectRepository } from '@nestjs/typeorm';
import { IBoookDomainService } from 'apps/clasificacion-de-libros/src/domain/services/book.service';
import { BookEntityMongo } from '../entities/book.entity';
import { BookRepository } from '../repositories/book.repository.mongo';

export class BookMongoService implements IBoookDomainService<BookEntityMongo> {

    constructor() { 
        @InjectRepository(BookEntityMongo)
        private readonly bookRepository: BookRepository<BookEntityMongo>, 
    } ()
    
}
