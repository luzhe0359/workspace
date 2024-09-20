import { Controller, Get, Post, Body, Patch, Param, Delete, Version } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

/**
 * * restful 版本控制，有以下3种
 *  URI Versioning	      版本将在请求的 URI 中传递（默认）
 *  Header Versioning	    自定义请求标头将指定版本
 *  Media Type Versioning	请求的Accept标头将指定版本
 **/

// 1. 路由整体配置版本号
@Controller({
  path: 'user',
  version: '1'
})
// @Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // 2. 路由单独配置版本号
  @Get()
  @Version('2')
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
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
