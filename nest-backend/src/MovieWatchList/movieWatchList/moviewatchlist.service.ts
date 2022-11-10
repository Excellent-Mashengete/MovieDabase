import { HttpException, HttpStatus, Injectable, NotFoundException, Res } from '@nestjs/common';
import { WatchDocument, watchList } from '../schema/watchlist.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserWatchList } from '../dtos/watch.dtos';

@Injectable()
export class MoviewatchlistService {
    constructor(@InjectModel(watchList.name) private  watchModel: Model<WatchDocument>){}
 
    async AddWatchList(movie: UserWatchList){
        const newStudent = await new this.watchModel(movie);
        return newStudent.save();
    }

    async removeMovie(id: number){
        const removedMovie = await this.watchModel.findByIdAndRemove(id);
        if (!removedMovie) {
            throw new NotFoundException(`Movie #${id} not found`);
        }
        return removedMovie;
    }


    async FindOne(moveId: any){
        const userMovie = await this.watchModel.findOne({moveId});        
        return userMovie;
    }

    async getAllMovies(type:any){
        const movieData = await this.watchModel.find({type});
        // if (!movieData || movieData. == 0) {
        //     throw new NotFoundException('Students data not found!');
        // }
        return movieData;
    }
}

