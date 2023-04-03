import { Observable } from 'rxjs';

/**
 * Esta interfaz es la encargada de definir el contrato de la base de datos
 * para el modelo que se le pase como parametro
 *
 * @export
 * @interface IBase // la interfaz base
 * @typedef {IBase}  // el tipo base
 * @template Model
 */
export interface IBase<Model> {
  /**
   * Este metodo es el encargado de crear un nuevo registro en la base de datos
   * para el modelo que se le pase como parametro
   *
   * @param {Model} model
   * @returns {Observable<Model>}
   */
  create(model: Model): Observable<Model>;
}
