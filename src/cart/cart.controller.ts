import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Put,
  Req,
  UseGuards
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
  async createCartDetails(@Req()  request:Request,@Body() Cart: CreateCartDto) {
    // const user= request.User.id;
    //@ts-ignore 
    console.log(request.authorization);
    return "hello";
  }
  @Post('/test')
  testDetails( @Req() request:Request){
    console.log(request)
    return "hello"
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
