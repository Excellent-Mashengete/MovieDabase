import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, Users } from '../schema/users.schema';
import { RegisterDTO, LoginDTO } from '../dtos/user.dtos';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthenticationService 
{
    constructor(@InjectModel(Users.name) private  userModel: Model<UserDocument>){}


    async Create(UserDTO:RegisterDTO) {
        const {firstname, lastname, email, cellno, password} = UserDTO;
        //Checks if email exist or not return the results then save them in user
        const user = await this.userModel.findOne({email});

        //Returned results has data inside, the error message will appear 
        if(user){
            throw new HttpException('user already exists', HttpStatus.BAD_REQUEST);
        }
        const newUser = this.userModel.create({firstname, lastname, email, cellno, password});
    }

    async Login(user:any) {
        const payload = { username: user.username, sub: user._id };
       
    }

    async getUser(query: LoginDTO ){
        const { email, password } = query;
        console.log(email, password);
        
        const user = await this.userModel.findOne({ email });
        
        if(!user){
            throw new HttpException('user does not exists', HttpStatus.BAD_REQUEST);
        }else{
            const passwordValid = await bcrypt.compare(password, user.password)
            console.log(passwordValid);
            if (passwordValid === true){
                
            }
        }
      

        // const passwordValid = await bcrypt.compare(password, user.password)

        // console.log(passwordValid);
        
        // if (!user) {
        //     
        // }

        // if (user && passwordValid) {
        //     return user;
        // }
     
    } 
}
