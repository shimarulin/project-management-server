import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const API_SERVER_PORT = 3000;
  const API_VERSION = 1;

  const appOptions = { cors: true };
  const app = await NestFactory.create(AppModule, appOptions);
  app.setGlobalPrefix(`api/v${API_VERSION}`);

  await app.listen(API_SERVER_PORT);
}
bootstrap().catch((err) => {
  console.log(err);
});
