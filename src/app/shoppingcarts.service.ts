import { Injectable } from '@angular/core';
import { Box } from '../model/box';
import { Drink } from '../model/drink';



@Injectable({
  providedIn: 'root'
})
export class ShoppingcartsService {


  items: Box[] = [];
  items2: Drink[] =[]
  constructor() { }

  addToCart(box: Box){
    this.items.push(box);
  }


  getItems(){
    return this.items;
  }

  itemsCount(){
    return this.items.length;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }
}
