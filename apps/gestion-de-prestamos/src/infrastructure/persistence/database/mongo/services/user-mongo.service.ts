import { Injectable } from '@nestjs/common';
import { IUserDomainInterface } from 'apps/gestion-de-prestamos/src/domain/services/user.service';
import { UserRepository } from '../repositories/user.repository.mongo';
import { UserSchemaMongo } from '../schemas/user.schema';
import { from, Observable } from 'rxjs';
import { UserDomainModel } from 'apps/gestion-de-prestamos/src/domain/models/user.model';

@Injectable()
export class UserMongoService implements IUserDomainInterface<UserSchemaMongo> {
  constructor(private readonly userRepository: UserRepository) {}

  createUser(userEntity: UserDomainModel): Observable<UserDomainModel> {
    console.log(userEntity);
    return from(this.userRepository.create(userEntity));
  }
}
