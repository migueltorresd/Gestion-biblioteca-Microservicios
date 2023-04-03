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
  /**
   * este metodo permite crear una entidad en la base de datos
   *
   * @param {Entity} entity // la entidad que se va a crear
   * @returns {Observable<Entity>} // retorna la entidad creada
   */
  create(entity: Entity): Observable<Entity>;
  /**
   * este metodo permite actualizar una entidad en la base de datos
   *
   * @param {string} title // el titulo de la entidad que se va a actualizar
   * @returns {Observable<Entity[]>} // retorna la entidad actualizada
   */
  findBookByTitle(title: string): Observable<Entity[]>;
  /**
   * este metodo permite actualizar una entidad en la base de datos
   *
   * @param {string} id // el id de la entidad que se va a actualizar
   * @param {boolean} updates // el estado de prestamo de la entidad que se va a actualizar
   * @returns {Observable<Entity>} // retorna la entidad actualizada
   */
  updateLoanStatus(id: string, updates: boolean): Observable<Entity>;
}
