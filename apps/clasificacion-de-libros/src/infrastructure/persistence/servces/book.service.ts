import { Injectable } from '@nestjs/common';
import { BookMongoService } from '../mongo/services/book-mongo.service';

/**
 * Este servicio es el encargado de realizar las operaciones de la base de datos
 * para eso  extiende de BookMongoService que es el servicio que se encarga de realizar las operaciones de la base de datos
 * para el caso que en algun furo se cambie la base de datos solo se tendria que cambiar el servicio que extiende
 *
 * @export
 * @class BookService // Este servicio es el encargado de realizar las operaciones de la base de datos
 * @extends {BookMongoService}
 */
@Injectable()
export class BookService extends BookMongoService {}
