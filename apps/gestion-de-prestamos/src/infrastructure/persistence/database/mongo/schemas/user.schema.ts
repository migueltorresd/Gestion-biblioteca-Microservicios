import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserDomainModel } from '../../../../../domain/models/user.model';
import { HydratedDocument } from 'mongoose';
/**
 * Esta clase define el esquema de la entidad usuario en mongo
 * para eso extiende de la entidad usuario
 * @Param {string} name// nombre del usuario
 * @Param {string} email// correo del usuario
 * @Param {string} doument// documento del usuario
 * @Param {string} phone// telefono del usuario
 * @Param {string} user// usuario del usuario
 * @Param {string} password// contraseña del usuario
 * @Param {string} lender// prestamo del usuario
 * @export
 * @class UserSchemaMongo
 * @extends {UserDomainModel}
 */
@Schema({
  collection: 'users',
  versionKey: false,
})
export class UserSchemaMongo extends UserDomainModel {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  doument: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  user: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  lender: string;
}
export const userSchema = SchemaFactory.createForClass(UserSchemaMongo);
export type userDocument = HydratedDocument<UserSchemaMongo>;
