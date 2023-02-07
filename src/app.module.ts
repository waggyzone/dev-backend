import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PetDetailsModule } from './pet-details/pet-details.module';
import { AuthModule } from './auth/auth.module';
import { AccessoriesModule } from './accessories/accessories.module';

import { ProductModule } from './product/product.module';

import { GroomerModule } from './groomer/groomer.module';

import { TrainerModule } from './trainer/trainer.module';
import { DaycareModule } from './daycare/daycare.module';

import { FeedbackModule } from './feedback/feedback.module';

import { SaleModule } from './sale/sale.module';

import { PurchaseModule } from './purchase/purchase.module';

import { StockModule } from './stock/stock.module';

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
    ProductModule,
    AccessoriesModule,
    GroomerModule,
    TrainerModule,
    DaycareModule,
    FeedbackModule,
    SaleModule,
    PurchaseModule,
    StockModule,
    
  ],
  controllers: [AppController ],
  providers: [AppService],
 
})
export class AppModule {}
