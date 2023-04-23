import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { request, Request } from 'express';
import { ObjectId } from 'mongoose';
import { CreateCartDto, UpdateCartDto } from './cart.dto';
import { CartService } from './cart.service';

@UseGuards(JwtAuthGuard)
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}
  @Post('/create')
  async createCartDetails(
    @Req() request: Request,
    @Body() cart: CreateCartDto,
  ) {
    const user: Express.User = request.user;
    //@ts-ignore
    const userId = user.id;
    cart.user_id = userId;

    return await this.cartService.create(cart);
  }

  @Post('/create/order')
  async createOrder(@Req() request: Request) {
    const user: Express.User = request.user;
    const result = await this.cartService
      //@ts-ignore
      .findCartItems(user.id)
      .then((promise) => {
        return promise.map((data) => data._id);
      });
    const promise = this.cartService.makeCart(result);
    return promise;
  }

  @Get('/find')
  async findCartByUserId(@Req() request: Request) {
    const user: Express.User = request.user;

    //@ts-ignore
    return await this.cartService.findCartItems(user.id);
  }
  @Get('/orders')
  async findCartOrderByUserId(@Req() request: Request) {
    const user: Express.User = request.user;

    //@ts-ignore
    return await this.cartService.findCartItems(user.id, 'done');
  }
  @Put('/update/:id')
  async updateCartById(@Param('id') id: ObjectId, @Body() Cart: UpdateCartDto) {
    console.log(Cart);
    return await this.cartService.findByIdAndUpdate(id, Cart);
  }
  @Put('/update/cart/:id')
  async updateCart(@Param('id') id: ObjectId, @Body() Cart: UpdateCartDto) {
    const user: Express.User = request.user;
    //@ts-ignore
    return await this.cartService.findCartItemCountUpdate(user.id, id, Cart);
  }

  //Remove product by Id
  @Delete('/remove/:id')
  async removeCartById(@Param('id') id: ObjectId) {
    return await this.cartService.findByIdAndRemove(id);
  }

  @Delete('/remove/item/:id')
  async removeCartItemById(@Param('id') id: ObjectId, @Req() request: Request) {
    const user: Express.User = request.user;
    //@ts-ignore
    return await this.cartService.findByIdAndRemoveCartItem(user.id, id);
  }
}
