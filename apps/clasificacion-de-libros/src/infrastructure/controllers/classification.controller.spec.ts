import { Test, TestingModule } from '@nestjs/testing';
import { ClassificationController } from './classification.controller';
import { BookService } from '../persistence/servces/book.service';
import { CreateBookUseCase } from '../../application/create-book/create-book-case';
import { DeleteBookUseCase } from '../../application/delete-book/delete-book';
import { GetBookUseCase } from '../../application/get-book/get-book-case';
import { UpdateLoanStatusUseCase } from '../../application/update-loan-status/update-loan-status.case';
import { Observable, of } from 'rxjs';
import { BookDomainEntity } from '../../domain/entities/book-domain.entity';
import { createBookDto } from '../dto/create-book.dto';

describe('ClassificationController', () => {
  let classificationController: ClassificationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ClassificationController],
      providers: [
        BookService,
        CreateBookUseCase,
        DeleteBookUseCase,
        GetBookUseCase,
        UpdateLoanStatusUseCase,
      ],
    }).compile();

    classificationController = app.get<ClassificationController>(
      ClassificationController,
    );
  });

  describe('createBook', () => {
    it('should create a new book', (done) => {
      // Arrange
      const createBookDto: createBookDto = {
        _id: '1',
        author: 'Test Author',
        description: 'Test Description',
        publishedDate: new Date('2022-01-01'),
        createdAt: new Date('2021-01-01'),
        updatedLoad: false,
        title: 'Test Book',
      };
      const bookDomainEntity: BookDomainEntity = {
        _id: '1',
        author: 'Test Author',
        description: 'Test Description',
        publishedDate: new Date('2022-01-01'),
        createdAt: new Date('2021-01-01'),
        updatedLoad: false,
        title: 'Test Book',
      };
      const spyCase = jest
        .spyOn(CreateBookUseCase.prototype, 'execute')
        .mockReturnValue(of(bookDomainEntity));

      // Act
      const result: Observable<BookDomainEntity> =
        classificationController.createBook(createBookDto);

      // Assert
      expect(spyCase).toHaveBeenCalledWith(createBookDto);
      result.subscribe((book) => {
        expect(book).toEqual(bookDomainEntity);
        done();
      });
    });
  });
});
