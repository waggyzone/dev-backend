import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as redisStore from 'cache-manager-redis-store';
import { RedisClientOptions } from 'redis';
import { AccessoriesModule } from './accessories/accessories.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DaycareModule } from './daycare/daycare.module';
import { FeedbackModule } from './feedback/feedback.module';
import { GroomerModule } from './groomer/groomer.module';
import { PetDetailsModule } from './pet-details/pet-details.module';
import { PurchaseModule } from './purchase/purchase.module';
import { SaleModule } from './sale/sale.module';
import { StockModule } from './stock/stock.module';
import { CartModule } from './cart/cart.module';
import { TrainerModule } from './trainer/trainer.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    CacheModule.register<RedisClientOptions>({
      isGlobal: true,
      store: redisStore,
      url: process.env.REDIS_URI,
      ttl: +process.env.CACHE_TTL,
    }),
    MongooseModule.forRoot(`${process.env.MONGO_URI}`, {
      dbName: 'DEVWAGGY',
      connectTimeoutMS: 300000,
    }),
    UserModule,
    PetDetailsModule,
    AuthModule,
    AccessoriesModule,
    GroomerModule,
    TrainerModule,
    DaycareModule,
    FeedbackModule,
    SaleModule,
    PurchaseModule,
    StockModule,
    CartModule,
    ProductModule,
  ],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule { }
