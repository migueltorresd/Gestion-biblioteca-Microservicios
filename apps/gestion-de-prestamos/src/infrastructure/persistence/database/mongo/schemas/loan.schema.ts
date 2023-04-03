import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import { UserSchemaMongo } from './user.schema';

/**
 * Este es el esquema de la entidad prestamo en la base de datos mongo
 *
 * @export
 * @class LoanSchemaMongo
 */
@Schema({ collection: 'Loans', versionKey: false })
export class LoanSchemaMongo {
  /**
   * id del libro
   *
   * @type {string}
   */
  @Prop({ required: true })
  bookId: string;

  /**
   * id del usuario
   *
   * @type {string}
   */
  @Prop({ required: true })
  userId: string;

  /**
   * titulo del libro
   *
   * @type {?string}
   */
  @Prop({ required: true })
  title?: string;

  /**
   * fecha de prestamo del libro
   *
   * @type {Date}
   */
  @Prop({ required: true })
  loanDate: Date;

  /**
   * fecha de devolucion del libro
   *
   * @type {Date}
   */
  @Prop({ required: true })
  returnDate: Date;
}

/**
 *  loanSchema es el esquema de la entidad prestamo en la base de datos mongo
 *
 * @type {*}
 */
export const loanSchema = SchemaFactory.createForClass(LoanSchemaMongo);
/**
 * loanDocument es el documento de la entidad prestamo en la base de datos mongo
 *
 * @export
 * @typedef {loanDocument}
 */
export type loanDocument = HydratedDocument<UserSchemaMongo>;
