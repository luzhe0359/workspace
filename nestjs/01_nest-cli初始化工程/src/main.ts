/**
 * * 使用nest-cli构建项目 nest new project-name
 * 1. 入口文件 main.ts
 * 2. 查看nestjs所有的命令 nest --help
 * 3. 生成一个用户模块 nest g resource user
 * 4. 使用restful风格，实现CRUD、版本控制
 */

import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 开启版本控制
  app.enableVersioning({
    // 版本号
    type: VersioningType.URI
  });
  await app.listen(3000);
}
bootstrap();
