import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WatchDocument = HydratedDocument<watchList>

@Schema()
export class watchList {
   @Prop({ required: true })
   backdrop_path: string;

   @Prop([Number])
   @Prop({ required: true })
   genre_ids: number[];

   @Prop({ required: true })
   id_movie: number;
   
   @Prop({ required: true })
   original_language: string;

   @Prop({ required: true })
   original_title: string;

   @Prop()
   overview: string;

   @Prop({ required: true })
   poster_path: string;

   @Prop({ required: true })
   release_date: Date;

   @Prop({ required: true })
   title: string;

   @Prop()
   vote_average: number

   @Prop()
   vote_count: number;

   @Prop()
   type: string;
}
export const wacthListSchema = SchemaFactory.createForClass(watchList);

