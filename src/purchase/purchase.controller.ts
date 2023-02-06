import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreatePurchaseDto, UpdatePurchaseDto } from './purchase.dto';
import { Purchase } from './purchase.model';
import { PurchaseService } from './purchase.service';

@Controller('purchase')
export class PurchaseController {
 
 constructor(private readonly purchaseService: PurchaseService){}

 @Get('/all')
 async finAllPurchase()
  {
     
     return await this.purchaseService.findAll();
 }

 @Post('/create')
 async createPurchaseDetails(@Body() Purchase: CreatePurchaseDto){
     return await this.purchaseService.create(Purchase);

 }

 @Put('/update/:id')
 async updatePurchaseById(
   @Param('id') id: ObjectId,
   @Body() purchase: UpdatePurchaseDto,
 ) {
   console.log(purchase);
   return await this.purchaseService.findByIdAndUpdate(id, purchase);
 }

 // Remove Trainer Details By Id
 @Delete('/remove/:id')
 async removePurchaseById(@Param('id') id: ObjectId) {
   return await this.purchaseService.findByIdAndRemove(id);

}
}