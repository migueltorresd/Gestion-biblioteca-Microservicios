import { Observable } from 'rxjs';

export interface IBase<Entity> {
  create(entity: Entity): Observable<Entity>;
  findBookByTitle(title: string): Observable<Entity[]>;
}
