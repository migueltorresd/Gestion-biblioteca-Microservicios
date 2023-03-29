import { Body, Controller, Post } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateUserUseCase } from '../../application/create-user/create-user.usecase';
import { UserDomainModel } from '../../domain/models/user.model';
import { CreateUserDto } from '../dto/user.dto';
import { UserService } from '../services/user.service';

@Controller('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() userEntity: CreateUserDto): Observable<UserDomainModel> {
    const useCase = new CreateUserUseCase(this.userService);
    return useCase.execute(userEntity);
  }
  @EventPattern('create-book')
  createBook(@Payload() data: any) {
    console.log('----------funciona julian------');
    console.log(data);
  }
}
