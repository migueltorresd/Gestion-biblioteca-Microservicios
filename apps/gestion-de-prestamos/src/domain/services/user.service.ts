import { Observable } from 'rxjs';

export interface IUserDomainInterface<UserDomainModel> {
  createUser(userEntity: UserDomainModel): Observable<UserDomainModel>;
}
