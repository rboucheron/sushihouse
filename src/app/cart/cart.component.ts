import { Component } from '@angular/core';
import { LocalService } from '../local.service';
import { OnInit } from '@angular/core';
import { Box } from '../../model/box';
import { Drink } from '../../model/drink';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  public boxs!: Array<Box>;
  public drinks!: Array<Drink>;
  public total!: number;

  constructor(private LocalService: LocalService) {}

  ngOnInit() {
    this.findAllItems();
    this.SetTotal();
  }
  private findAllItems(): void {
    this.boxs = this.LocalService.GetBox();
    this.drinks = this.LocalService.GetDrink();
  }
  public addBoxToCard(id: number): void {
    const index: number = this.boxs.findIndex(
      (element: Box) => element.id === id
    );
    if (index !== -1 && this.LocalService.CountBox() != 10) {
      this.boxs[index].quantity++;
      this.boxs[index].price += this.boxs[index].startprice;
      this.LocalService.SetBoxs(this.boxs);
    }
    this.SetTotal();
  }
  public addDrinkToCard(id: number): void {
    const index: number = this.drinks.findIndex(
      (element: Drink) => element.id === id
    );
    if (index !== -1) {
      this.drinks[index].quantity++;
      this.drinks[index].price += this.drinks[index].startprice;
      this.LocalService.SetDrinks(this.drinks);
    }
    this.SetTotal();
  }
  public removeBoxToCard(id: number): void {
    const index: number = this.boxs.findIndex(
      (element: Box) => element.id === id
    );
    if (index !== -1 && this.boxs[index].quantity > 0) {
      this.boxs[index].quantity--;
      this.boxs[index].price -= this.boxs[index].startprice;
      if (this.boxs[index].quantity <= 0) {
        this.deleteBox(this.boxs[index].id);
      } else {
        this.LocalService.SetBoxs(this.boxs);
      }
    }
    this.SetTotal();
  }
  public removeDrinkToCard(id: number): void {
    const index: number = this.drinks.findIndex(
      (element: Drink) => element.id === id
    );
    if (index !== -1 && this.drinks[index].quantity > 0) {
      this.drinks[index].quantity--;
      this.drinks[index].price -= this.drinks[index].startprice;
      this.LocalService.SetDrinks(this.drinks);
      if (this.drinks[index].quantity <= 0) {
        this.deleteDrink(this.drinks[index].id);
      } else {
        this.LocalService.SetDrinks(this.drinks);
      }
    }
    this.SetTotal();
  }
  public deleteBox(id: number): void {
    this.LocalService.clearCartBox(id);
    this.findAllItems();
  }
  public deleteDrink(id: number): void {
    this.LocalService.clearCartDrink(id);
    this.findAllItems();
  }
  public deleteAll(): void {
    this.LocalService.SetDrinks([]), this.LocalService.SetBoxs([]);
    this.findAllItems();
  }

  private totalBoxPrice() {
    let totalPrice: number = 0;
    this.boxs.forEach((box: any) => {
      totalPrice += box.quantity * box.startprice;
    });
    return totalPrice;
  }
  private totalDrinkPrice() {
    let totalPrice: number = 0;
    this.drinks.forEach((drink: any) => {
      totalPrice += drink.quantity * drink.startprice;
    });
    return totalPrice;
  }

  private SetTotal(): void {
    this.total = this.totalDrinkPrice() + this.totalBoxPrice();
  }
}
