import { Injectable } from '@nestjs/common';
import { UserMongoService } from '../persistence/database/mongo/services/user-mongo.service';
/**
 * Esta clase define el servicio de la entidad usuario
 * para eso extiende la clase UserMongoService
 *
 * @export
 * @class UserService
 * @extends {UserMongoService}
 */
@Injectable()
export class UserService extends UserMongoService {}
