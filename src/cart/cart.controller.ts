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

  @Get('/test')
  test() {
    return 'done';
  }

  @Put('/update/:id')
  async updateCartById(@Param('id') id: ObjectId, @Body() Cart: UpdateCartDto) {
    console.log(Cart);
    return await this.cartService.findByIdAndUpdate(id, Cart);
  }
  //Remove product by Id
  @Delete('/remove/:id')
  async removeCartById(@Param('id') id: ObjectId) {
    return await this.cartService.findByIdAndRemove(id);
  }
}
