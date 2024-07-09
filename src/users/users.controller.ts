import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { SignInDto } from './dto/signIn.Dto';
import { SignUpDto } from './dto/signUp.Dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("signIn")
  signIn(@Body() signInDto: SignInDto) {
    return this.usersService.SignIn(signInDto);
  }

  @Post("signUp")
  signUp(@Body() signUpDto: SignUpDto){
    return this.usersService.SignUp(signUpDto);
  }

  @Post("refresh")
  refresh(@Body() refreshTokenDto: Record<string, any>){
    return this.usersService.refreshToken(refreshTokenDto)
  }

  @Get('profile')
  profile(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch('update')
  update( @Body() signUpDto: SignUpDto) {
    return this.usersService.update(signUpDto);
  }

  @Delete('logout')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
