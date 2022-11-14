import { HttpException, HttpStatus, Injectable, NotFoundException, Res } from '@nestjs/common';
import { WatchDocument, watchList } from '../schema/watchlist.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserWatchList } from '../dtos/watch.dtos';

@Injectable()
export class MoviewatchlistService {
    constructor(@InjectModel(watchList.name) private  watchModel: Model<WatchDocument>){}
 
    //Add movie to watch list
    async AddWatchList(movie: UserWatchList){
        const newStudent = await new this.watchModel(movie);
        return newStudent.save();
    }

    //Delete a movie with a specific id
    async removeMovie(id: number){
        const removedMovie = await this.watchModel.findByIdAndRemove(id);
        if (!removedMovie) {
            throw new NotFoundException(`Movie #${id} not found`);
        }
        return removedMovie;
    }
    
    //Search for a specific movie
    async FindOne(moveId: any){
        const userMovie = await this.watchModel.findOne({moveId});        
        return userMovie;
    }

    //Search For all movies that have a specific type
    async getAllMovies(type:any){
        const movieData = await this.watchModel.find({type});
        if (!movieData || type == 0) {
            throw new NotFoundException('no movie Found');
        }
        return movieData;
    }
}

