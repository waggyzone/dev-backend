import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PetDetailsModule } from './pet-details/pet-details.module';
import { AuthModule } from './auth/auth.module';
import { AccessoriesModule } from './accessories/accessories.module';
import { AccessoriesController } from './accessories/accessories.controller';
import { AccessoriesService } from './accessories/accessories.service';

import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
    }),
    MongooseModule.forRoot(`${process.env.MONGO_URI}`, {
      dbName: 'DEVWAGGY',
      connectTimeoutMS: 300000,
    }),
    UserModule,
    PetDetailsModule,
    AuthModule,
<<<<<<< HEAD
    ProductModule,
=======
    AccessoriesModule,
>>>>>>> ecf2d3bd28c49de4238c34e78538584de944162f
  ],
  controllers: [AppController, AccessoriesController],
  providers: [AppService, AccessoriesService],
})
export class AppModule {}
