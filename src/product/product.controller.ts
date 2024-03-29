import { Body, Controller, Get, Param, Post, Put, UseGuards, Delete } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { identity, ObjectUnsubscribedError } from 'rxjs';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get('/all')
  async finAllProduct() {
    return await this.productService.findAll();
  }
  @Post('/create')
  async createProductDetails(@Body() Product: CreateProductDto) {
    return await this.productService.create(Product);
  }
  //slug
  @Get('/find/name/:product')
  async findProductByName(@Param('product') Product: string) {
    return await this.productService.findByProduct(Product);
  }

  @Get('/find/brandname/:brand')
  async findProductByBrandName(@Param('brand') Product: string) {
    return await this.productService.findByBrandName(Product);
  }



  @Get('/find/price/:price')
  async findProductByPrice(@Param('price') Product: number) {
    return await this.productService.findByPrice(Product);

  }


  //update product details by id

  @Put('/update/:id')
  async updateProductById(
    @Param('id') id: ObjectId,
    @Body() Product: UpdateProductDto,
  ) {
    console.log(Product);
    return await this.productService.findByIdAndUpdate(id, Product);
  }
  //Remove product by Id
  @Delete('/remove/:id')
  async removeProductById(@Param('id') id: ObjectId) {
    return await this.productService.findByIdAndRemove(id);
  }
}








