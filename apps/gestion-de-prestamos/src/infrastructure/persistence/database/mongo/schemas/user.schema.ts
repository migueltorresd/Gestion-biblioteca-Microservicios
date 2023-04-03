import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserDomainModel } from '../../../../../domain/models/user.model';
import { HydratedDocument } from 'mongoose';
/**
 * Esta clase define el esquema de la entidad usuario en mongo
 * para eso extiende de la entidad usuario
 *
 * @export
 * @class UserSchemaMongo
 * @extends {UserDomainModel}
 */
@Schema({
  collection: 'users',
  versionKey: false,
})
export class UserSchemaMongo extends UserDomainModel {
  /**
   * nombre del usuario
   *
   * @type {string}
   */
  @Prop({ required: true })
  name: string;

  /**
   * email del usuario
   *
   * @type {string}
   */
  @Prop({ required: true })
  email: string;

  /**
   * documento del usuario
   *
   * @type {string}
   */
  @Prop({ required: true })
  doument: string;

  /**
   * telefono del usuario
   *
   * @type {string}
   */
  @Prop({ required: true })
  phone: string;

  /**
   * tipo de usuario admin o user
   *
   * @type {string}
   */
  @Prop({ required: true })
  user: string;

  /**
   * contraseña del usuario
   *
   * @type {string}
   */
  @Prop({ required: true })
  password: string;

  /**
   * estado del prestamo
   *
   * @type {string}
   */
  @Prop({ required: true })
  lender: string;
}
/**
 * userSchema es el esquema de la entidad usuario en la base de datos mongo
 *
 * @type {*}
 */
export const userSchema = SchemaFactory.createForClass(UserSchemaMongo);
/**
 * userDocument es el documento de la entidad usuario en la base de datos mongo
 *
 * @export
 * @typedef {userDocument}
 */
export type userDocument = HydratedDocument<UserSchemaMongo>;
