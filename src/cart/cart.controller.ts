import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateCartDto, UpdateCartDto } from './cart.dto';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) {}
    @Post('/create')
    async createCartDetails(@Body() Cart: CreateCartDto) {
        return await this.cartService.create(Cart);
    }

     @Put('/update/:id')
  async updateCartById(
    @Param('id') id: ObjectId,
    @Body() Cart: UpdateCartDto,
  ) {
    console.log(Cart);
    return await this.cartService.findByIdAndUpdate(id, Cart);
  }
  //Remove product by Id
  @Delete('/remove/:id')
  async removeCartById(@Param('id') id: ObjectId) {
    return await this.cartService.findByIdAndRemove(id);
  }
}
