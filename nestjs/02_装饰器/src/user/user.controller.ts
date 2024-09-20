import {
  Controller,
  Headers,
  Request,
  Query,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  // create(@Body() req) {
  //   console.log('🚀 ~ UserController ~ create ~ req:', req);
  //   return this.userService.create(req);
  // }
  create(@Body('name') name) {
    console.log('🚀 ~ UserController ~ create ~ name:', name);
    return this.userService.create(name);
  }

  @Get() // http://127.0.0.1:3000/user?name="法外狂徒"
  // findAll(@Request() req) {
  //   console.log('🚀 ~ UserController ~ findAll ~ req:', req.query);
  //   return this.userService.findAll();
  // }
  // findAll(@Query() query) {
  //   console.log('🚀 ~ UserController ~ findAll ~ query:', query);
  //   return this.userService.findAll();
  // }
  findAll(@Query('name') name) {
    console.log('🚀 ~ UserController ~ findAll ~ name:', name);
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Headers() headers) {
    console.log('🚀 ~ UserController ~ findOne ~ headers:', headers);
    console.log('🚀 ~ UserController ~ findOne ~ id:', id);
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
