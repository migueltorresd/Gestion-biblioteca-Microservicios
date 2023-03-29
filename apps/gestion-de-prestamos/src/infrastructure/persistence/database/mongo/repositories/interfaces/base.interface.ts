import { Observable } from 'rxjs';

export interface IBase<Model> {
  create(model: Model): Observable<Model>;
}
