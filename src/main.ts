import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('waggy')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(morgan('combined'));
  app.enableCors();
  app.use(cookieParser());
  await app.listen(process.env.PORT, () =>
    console.log(`Running: ${process.env.PORT}`),
  );
  let route = [];
  app
    .getHttpServer()
    ._events.request._router.stack.filter((item) => item !== undefined)
    .forEach((data) => {
      if (data.route) {
        route = [
          ...route,
          [
            `${(data.route?.stack[0].method).toUpperCase()}`,
            `http://localhost:${process.env.PORT}${data.route?.path}`,
          ],
        ];
      }
    });
  console.table(route);
}
bootstrap();
