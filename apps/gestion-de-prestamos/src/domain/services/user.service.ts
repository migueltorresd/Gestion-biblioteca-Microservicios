import { Observable } from 'rxjs';
import { UserDomainModel } from '../models/user.model';

export interface IUserDomainInterface<UserDomainModel> {
  createUser(userEntity: UserDomainModel): Observable<UserDomainModel>;
}
