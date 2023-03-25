import { Observable } from 'rxjs';

export interface IBase<Entity> {
  create(entity: Entity): Observable<Entity>;
  findByQuery(
    query: string,
    author: string,
    title: string,
  ): Observable<Entity[]>;
}
