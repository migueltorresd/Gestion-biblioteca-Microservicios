import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserDomainModel } from 'apps/gestion-de-prestamos/src/domain/models/user.model';
import { HydratedDocument } from 'mongoose';
@Schema({
  collection: 'users',
  versionKey: false,
})
export class UserSchemaMongo extends UserDomainModel {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  doument: string;

  @Prop()
  phone: string;

  @Prop()
  user: string;

  @Prop()
  password: string;

  @Prop()
  lender: string;
}
export const userSchema = SchemaFactory.createForClass(UserSchemaMongo);
export type userDocument = HydratedDocument<UserSchemaMongo>;
