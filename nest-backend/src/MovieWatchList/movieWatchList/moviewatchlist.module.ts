import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { wacthListSchema, watchList } from '../schema/watchlist.schema';
import { MoviewatchlistController } from './moviewatchlist.controller';
import { MoviewatchlistService } from './moviewatchlist.service';

@Module({
    imports: [ 
        MongooseModule.forFeature([{ name: watchList.name , schema: wacthListSchema }]) // read the schema for movie watchlist
    ],
    providers: [MoviewatchlistService],
    controllers: [MoviewatchlistController],
    exports: [MoviewatchlistService],
})
export class MoviewatchlistModule {}
