import { Body, Controller, Post } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateUserUseCase } from '../../application/create-user/create-user.usecase';
import { UserDomainModel } from '../../domain/models/user.model';
import { CreateUserDto } from '../dto/user.dto';
import { UserService } from '../services/user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

/**
 * este controlador es el encargado de recibir las peticiones de crear, buscar y eliminar un usuario
 *
 * @export
 * @class UserController
 * @typedef {UserController}
 */
@ApiTags('User')
@Controller('User')
export class UserController {
  /**
   * crea una instancia de UserController y asigna el servicio de usuario
   *
   * @constructor
   * @param {UserService} userService // este es el servicio de usuario
   */
  constructor(private readonly userService: UserService) {}

  /**
   * Esta encargada de recibir la peticion de crear un usuario
   *
   * @param {CreateUserDto} userEntity // este es el dto que se recibe por la peticion
   * @returns {Observable<UserDomainModel>} // retorna un observable del modelo de dominio de usuario
   */
  @ApiOperation({ summary: 'Crea usuario' })
  @Post()
  createUser(@Body() userEntity: CreateUserDto): Observable<UserDomainModel> {
    const useCase = new CreateUserUseCase(this.userService);
    return useCase.execute(userEntity);
  }
  /**
   * Esta peticion es la que se encarga de recibir la data del otro microservicio
   *
   * @param data // esta data es la que llega del otro microservicio por medio
   */
  @EventPattern('create-book')
  createBook(@Payload() data: any) {
    console.log('----------funciona---------');
    console.log(data);
  }
}
