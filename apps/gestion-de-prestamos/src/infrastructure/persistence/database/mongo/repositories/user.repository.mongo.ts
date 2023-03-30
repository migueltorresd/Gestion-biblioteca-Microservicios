import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDomainModel } from 'apps/gestion-de-prestamos/src/domain/models/user.model';
import { Observable, from } from 'rxjs';
import { Repository } from 'typeorm';
import { userDocument, UserSchemaMongo } from '../schemas/user.schema';
import { IBase } from './interfaces/base.interface';

/**
 * Esta clase define el repositorio de la entidad usuario
 * @export
 * @class UserRepository
 * @implements {IBase<UserSchemaMongo>}
 */
@Injectable()
export class UserRepository implements IBase<UserSchemaMongo> {
  constructor(
    @InjectModel(UserSchemaMongo.name)
    private userRepository: Repository<userDocument>,
  ) {}

  // se usa un observable para que el metodo sea asincrono y no se bloquee el hilo de ejecucion
  create(UserEntityMongo): Observable<UserDomainModel> {
    return from(this.userRepository.create(UserEntityMongo));
  }
}
