import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('combined'));
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
