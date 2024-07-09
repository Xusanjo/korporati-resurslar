import { Injectable } from '@nestjs/common';
import { SignInDto } from './dto/signIn.Dto';
import { SignUpDto } from './dto/signUp.Dto';
import { InjectModel } from "@nestjs/sequelize";
import { User } from './models/user.models';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepo: typeof User
    ){}

  async SignUp(signUpDto: SignUpDto): Promise<User> {
    const user = await this.userRepo.create(signUpDto);
    return user;
  }

  SignIn(signInDto: SignInDto) {
    return this.userRepo.create(signInDto);
  }

  refreshToken(refreshToken: Record<string, any>){
    return this.userRepo.create(refreshToken);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(updateUserDto: Record<string, any>) {
    return `This action updates a user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
