import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller('Event')
export class EventController {
  @EventPattern('create-book')
  createBook(@Payload() data: any) {
    console.log('----------funciona---------');
    console.log(data);
  }
}
