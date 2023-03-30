import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import { UserSchemaMongo } from './user.schema';

@Schema()
export class LoanSchemaMongo {
  @Prop({ required: true })
  bookId: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  loanDate: Date;

  @Prop({ required: true })
  returnDate: Date;
}

export const loanSchema = SchemaFactory.createForClass(LoanSchemaMongo);
export type loanDocument = HydratedDocument<UserSchemaMongo>;
