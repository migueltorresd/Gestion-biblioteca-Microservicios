import { Observable } from 'rxjs';

/**
 * Esta interfaz define los métodos que deben implementar los repositorios
 * de la aplicación.
 *
 * @export
 * @interface IBase // con esto se puede especificar la interfaz base
 * @template Entity // con esto se puede especificar la entidad de la base de datos
 */
export interface IBase<Entity> {
  create(entity: Entity): Observable<Entity>;
  findBookByTitle(title: string): Observable<Entity[]>;
}
