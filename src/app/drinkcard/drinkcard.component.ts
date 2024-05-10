import { Component, OnInit, Input, input } from '@angular/core';
import { Drink } from '../../model/drink';
import { ShoppingcartsService } from '../shoppingcarts.service';
import { LocalService } from '../local.service';
import { ActivatedRoute } from '@angular/router';
import { DrinkService } from '../drink.service';

@Component({
  selector: 'app-drinkcard',
  templateUrl: './drinkcard.component.html',
})
export class DrinkcardComponent implements OnInit {
  public drink!: Drink;
  @Input() Drink!: Drink;
  private id!: number;

  constructor(
    private activated: ActivatedRoute,
    private DrinkService: DrinkService,
    private LocalService: LocalService,
    private ShoppingcartsService: ShoppingcartsService
  ) {}

  ngOnInit() {
    this.activated.params.subscribe((data) => {
      this.id = data['id'];
    });
    this.recoverDrink();
  }
  
  private recoverDrink() {
    this.DrinkService.getDrinks().subscribe(
      (data: any) => {
        this.drink = data[0];
      },
      (error: any) => {
        console.error('Error fetching api:', error);
      }
    );
  }

  public addDrinktoCard() {
    const drink: any = this.LocalService.GetDrink();
    const id : number = this.Drink.id; 
    let index : number = drink.findIndex(function(element : Drink) {
      return element.id == id;
    });
    if (index == -1) {
      this.Drink.quantity = 1; 
      this.Drink.startprice = this.Drink.price; 
      this.LocalService.SetDrink(this.Drink);
    }else{
      drink[index].quantity ++; 
      drink[index].price = drink[index].price +  drink[index].startprice  ; 
      this.LocalService.SetDrinks(drink); 
    }
  }
}
