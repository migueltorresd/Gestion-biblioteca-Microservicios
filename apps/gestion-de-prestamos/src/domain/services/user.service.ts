import { Observable } from 'rxjs';
import { UserDomainEntity } from '../models/user.model';

export interface IUserDomainInterface {
  createUser(userEntity: UserDomainEntity): Observable<UserDomainEntity>;
}
