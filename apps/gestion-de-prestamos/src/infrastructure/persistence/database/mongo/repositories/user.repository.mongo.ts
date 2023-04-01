import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDomainModel } from '../../../../../domain/models/user.model';
import { Observable, from } from 'rxjs';
import { Repository } from 'typeorm';
import { userDocument, UserSchemaMongo } from '../schemas/user.schema';
import { IBase } from './interfaces/base.interface';

/**
 * Esta clase define el repositorio de la entidad usuario
 * @export
 * @class UserRepository
 * @implements {IBase<UserSchemaMongo>} // interfaz de la entidad usuario
 */
@Injectable()
export class UserRepository implements IBase<UserSchemaMongo> {
  constructor(
    @InjectModel(UserSchemaMongo.name)
    private userRepository: Repository<userDocument>,
  ) {}

  /**
   * Este metodo crea un usuario en la base de datos mongo
   *
   * @param  UserEntityMongo // usuario a crear
   * @return {Observable<UserDomainModel>} // usuario creado
   * @memberof UserRepository
   */
  create(UserEntityMongo): Observable<UserDomainModel> {
    return from(this.userRepository.create(UserEntityMongo));
  }
}
