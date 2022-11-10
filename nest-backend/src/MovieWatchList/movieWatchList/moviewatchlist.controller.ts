import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Res} from '@nestjs/common';
import { MoviewatchlistService } from './moviewatchlist.service';
import { UserWatchList } from '../dtos/watch.dtos';

@Controller('api')
export class MoviewatchlistController {
    constructor(private movie: MoviewatchlistService){}

    @Post('/addovies')
    async createProduct(@Res() response, @Body() movies: UserWatchList) {
        try {
            //Checks if MovieId exist or not return the results then save them in movie
            const results = await this.movie.FindOne(movies.id_movie)    
                
            //Returned results has data inside, the error message will appear 
            // if(results.id_movie == movies.id_movie){
            //     return response.status(HttpStatus.BAD_REQUEST).json({message: 'movie already exists'})
            // }
            const newMovie = await this.movie.AddWatchList(movies);
            return response.status(HttpStatus.CREATED).json({message: 'Movie Added to wactch list successfully', newMovie})    
            
        } catch (error) {
            
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,message: 'Error: Movie not added to watchlist', error: 'Bad Request'
            });
        }
    }

    @Get('/readMovielist/:type')
    async getAllMovies(@Res() response,  @Param('type') movies: string){
        try {
            const movieData = await this.movie.getAllMovies(movies);
            return response.status(HttpStatus.OK).json({ message: 'All students data found successfully',movieData,});
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }


    @Delete('/removeMovie/:_id')
    async deleteStudent(@Res() response, @Param('_id') movieId: number){
        try {
            const deletedMovie = await this.movie.removeMovie(movieId);
            return response.status(HttpStatus.OK).json({message: 'Student deleted successfully',deletedMovie});
        }catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
