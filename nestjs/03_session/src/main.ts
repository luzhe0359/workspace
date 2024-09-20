import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({ secret: 'ZhiE', name: 'zhe.session', rolling: true, cookie: { maxAge: null } })
  );
  await app.listen(3000);
}
bootstrap();
