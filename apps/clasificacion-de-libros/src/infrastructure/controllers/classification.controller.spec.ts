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
import { ModuleResolutionKind } from 'typescript';
import { BookRepository } from '../persistence';
import { CreateBookPublisher, FindBookByTitlePublisher } from '../messaging';

describe('ClassificationController', () => {
  let classificationController: ClassificationController;
  let bookService: BookService;
  let createBookUseCase: CreateBookUseCase;
  let deleteBookUseCase: DeleteBookUseCase;
  let getBookUseCase: GetBookUseCase;
  let updateLoanStatusUseCase: UpdateLoanStatusUseCase;
  let createBookPublisher: CreateBookPublisher;
  let findBookByTitlePublisher: FindBookByTitlePublisher;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ClassificationController],
      providers: [
        {
          provide: BookService,
          useValue: {},
        },
        {
          provide: CreateBookUseCase,
          useValue: {},
        },
        {
          provide: DeleteBookUseCase,
          useValue: {},
        },
        {
          provide: GetBookUseCase,
          useValue: {},
        },
        {
          provide: UpdateLoanStatusUseCase,
          useValue: {},
        },
        {
          provide: CreateBookPublisher,
          useValue: { publish: jest.fn() },
        },
        {
          provide: FindBookByTitlePublisher,
          useValue: { publish: jest.fn() },
        },
      ],
    }).compile();
    bookService = app.get<BookService>(BookService);
    createBookUseCase = app.get<CreateBookUseCase>(CreateBookUseCase);
    deleteBookUseCase = app.get<DeleteBookUseCase>(DeleteBookUseCase);
    getBookUseCase = app.get<GetBookUseCase>(GetBookUseCase);
    updateLoanStatusUseCase = app.get<UpdateLoanStatusUseCase>(
      UpdateLoanStatusUseCase,
    );
    classificationController = app.get<ClassificationController>(
      ClassificationController,
    );
    createBookPublisher = app.get<CreateBookPublisher>(CreateBookPublisher);
    findBookByTitlePublisher = app.get<FindBookByTitlePublisher>(
      FindBookByTitlePublisher,
    );
  });
  // se esta llamando y esta bien definido el controlador
  it('should be defined', () => {
    expect(classificationController).toBeDefined();
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
