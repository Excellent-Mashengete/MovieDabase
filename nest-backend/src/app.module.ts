import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviewatchlistModule } from './MovieWatchList/movieWatchList/moviewatchlist.module';
import { AuthenticationModule } from './Authentication/authentication/authentication.module';
import { AuthenticationController } from './Authentication/authentication/authentication.controller';

let MONGO_URI = 'mongodb+srv://excellent-mashengete:72537284286@movieapp.3ppuevi.mongodb.net/?retryWrites=true&w=majority';
  
@Module({
  imports: [
    MoviewatchlistModule, 
     AuthenticationModule,
    MongooseModule.forRoot(MONGO_URI)
  ],
  controllers: [AppController, AuthenticationController],
  providers: [AppService],
})
export class AppModule {}
