import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res,Request, NotAcceptableException, UseGuards } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { RegisterDTO } from '../dtos/user.dtos';
import * as bcrypt from 'bcrypt';


@Controller('api')
export class AuthenticationController {
    constructor(private auth: AuthenticationService){}

    @Post('/signup')
    async createUser(@Body() UserDTO:RegisterDTO) {
        const {firstname, lastname, email, cellno, password} = UserDTO;
        const hashedPassword = await bcrypt.hash(password, 10);  //encryting the password so that it can reduce hancking.
        const regData = {firstname, lastname, email, cellno, password: hashedPassword}
        const result = await this.auth.Create(regData);   
        return {result}
    }

    @Post('/signin')
    async login(@Request() req){
        return req.user;
    }

}

