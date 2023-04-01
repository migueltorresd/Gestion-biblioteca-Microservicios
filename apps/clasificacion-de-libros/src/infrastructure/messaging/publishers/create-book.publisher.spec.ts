import { ClientProxy } from '@nestjs/microservices';
import { CreateBookPublisher } from './create-book.publisher';
import { createBookDto } from '../../dto/create-book.dto';

describe('CreateBookPublisher', () => {
  let publisher: CreateBookPublisher;
  let client: ClientProxy;

  beforeEach(() => {
    client = {
      emit: jest.fn(),
    } as any;
    publisher = new CreateBookPublisher(client);
  });

  describe('publish', () => {
    it('should emit a "create-book" event with the serialized createBookDto', () => {
      // Arrange
      const bookDto: createBookDto = {
        _id: '1',
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        description:
          'The Catcher in the Rye is a 1951 novel by J. D. Salinger.',
        publishedDate: new Date('1951-07-16'),
        createdAt: new Date('2021-01-01'),
        updatedLoad: false,
      };
      const expectedEventData = JSON.stringify(bookDto);

      // Act
      publisher.publish(bookDto);

      // Assert
      expect(client.emit).toHaveBeenCalledTimes(1);
      expect(client.emit).toHaveBeenCalledWith(
        'create-book',
        expectedEventData,
      );
    });
  });
});
