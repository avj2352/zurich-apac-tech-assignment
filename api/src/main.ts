import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { apiDocumentation } from './swagger/api.swagger';


async function bootstrap() {
  const PORT = process.env.PORT || 3001;
  const app = await NestFactory.create(AppModule);
  // enable cors
  app.enableCors();
  // enable swagger documentation
  apiDocumentation(app);
  const server = await app.listen(PORT);
  console.log(`Server listening on PORT - ${server.address().port} `);
}
bootstrap();
