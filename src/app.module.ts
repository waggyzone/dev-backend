import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`${process.env.MONGO_URI}`,{
      dbName: 'DEVWAGGY',
      connectTimeoutMS: 300000,
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
