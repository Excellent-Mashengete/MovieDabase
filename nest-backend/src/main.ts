import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,  {cors: true});
  app.enableCors();
  const port = 3000
  await app.listen(port).then(() => {
    console.log(`Server is running on port ${port}. http://localhost:${port}`);  
  });
}
bootstrap();
