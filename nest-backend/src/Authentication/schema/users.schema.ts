import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<Users>

@Schema()
export class Users {
   @Prop({ required: true })
   firstname: string;

   @Prop({ required: true })
   lastname: string;

   @Prop({unique:true})
   @Prop({ required: true })
   email: string;

   @Prop({ required: true })
   cellno: string;

   @Prop({ required: true })
   password: string;
}
export const userSchema = SchemaFactory.createForClass(Users);