import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../drink.service';
@Component({
  selector: 'app-drinkcards',
  templateUrl: './drinkcards.component.html',

})
export class DrinkcardsComponent implements OnInit {
  public drinks: any; 

  constructor(private DrinkService: DrinkService) {}
  ngOnInit(): void {
    this.setDrinks(); 
    
  }

  setDrinks() {
    this.DrinkService.getDrinks().subscribe(
      (data: any) => {
        this.drinks = data; 
      },
      (error: any) => {
        console.error('Error fetching api:', error);
      }
    );
  }
}
