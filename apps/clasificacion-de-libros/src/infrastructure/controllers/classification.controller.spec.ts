import { Test, TestingModule } from '@nestjs/testing';
import { ClassificationController } from './classification.controller';
import { BookService } from '../persistence/servces/book.service';
import { CreateBookUseCase } from '../../application/add-book/create-book-case';
import { DeleteBookUseCase } from '../../application/delete-book/delete-book';
import { GetBookUseCase } from '../../application/get-book/get-book-case';
import { UpdateLoanStatusUseCase } from '../../application/update-loan-status/update-loan-status.case';
import { Observable, of } from 'rxjs';
import { BookDomainEntity } from '../../domain/entities/book-domain.entity';
import { createBookDto } from '../dto/create-book.dto';
import { ModuleResolutionKind } from 'typescript';
import { BookRepository } from '../persistence';
import { CreateBookPublisher } from '../messaging';
import { getRepositoryToken } from '@nestjs/typeorm';
import { prototype } from 'events';

describe('ClassificationController', () => {
  let classificationController: ClassificationController;
  let bookService: BookService;
  let createBookUseCase: CreateBookUseCase;
  let deleteBookUseCase: DeleteBookUseCase;
  let getBookUseCase: GetBookUseCase;
  let updateLoanStatusUseCase: UpdateLoanStatusUseCase;
  let createBookPublisher: CreateBookPublisher;

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
          provide: getRepositoryToken(BookDomainEntity),
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
            save: jest.fn(),
          },
        },
        {
          provide: CreateBookPublisher,
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
  describe('findBookByTitle', () => {
    it('should return a book entity when given a valid title', (done) => {
      const expectedBook = new BookDomainEntity({
        _id: '1',
        author: 'Test Author',
        description: 'Test Description',
        publishedDate: new Date('2022-01-01'),
        createdAt: new Date('2021-01-01'),
        updatedLoad: false,
        title: 'Test Book',
      });

      jest
        .spyOn(GetBookUseCase.prototype, 'execute')
        .mockReturnValue(of([expectedBook]));

      classificationController
        .findBookByTitle('Test Book')
        .subscribe((result) => {
          expect(result).toBeDefined();
          expect(result.title).toEqual(expectedBook.title);
          expect(result.author).toEqual(expectedBook.author);
          done();
        });
    });

    // it('should return undefined when given an invalid title', (done) => {
    //   jest
    //     .spyOn(GetBookUseCase.prototype, 'execute')
    //     .mockReturnValue(of([null]));

    //   classificationController
    //     .findBookByTitle('Invalid Book')
    //     .subscribe((result) => {
    //       expect(result).toBeUndefined();
    //       done();
    //     });
    // });
  });
});
