import { Injectable } from '@angular/core';
import { Drink } from '../model/drink';
import { Box } from '../model/box';
@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor() {}

  public GetBox(): any[] {
    const boxsString: string | null = localStorage.getItem('box');
    if (boxsString !== null) {
      return JSON.parse(boxsString);
    } else {
      return [];
    }
  }

  public SetBox(items: Box) {
    let boxs: Array<Box> = this.GetBox();
    boxs.push(items);
    localStorage.setItem('box', JSON.stringify(boxs));
  }

  public SetBoxs(items: Array<Box>) {
    localStorage.setItem('box', JSON.stringify(items));
  }
  public GetDrink(): Array<Drink>  {
    const drinksString: string | null = localStorage.getItem('drink');
    if (drinksString !== null) {
      return JSON.parse(drinksString);
    } else {
      return [];
    }  
  }
  public SetDrink(items: Drink) {
    let drinks: Array<Drink> = this.GetDrink();
    drinks.push(items);
    localStorage.setItem('drink', JSON.stringify(drinks));
  }

  public SetDrinks(items: Array<Drink>) {
    localStorage.setItem('drink', JSON.stringify(items));
  }

  public CountBox() {
    let boxs: Array<Box> = this.GetBox();
    let boxcount : number = 0; 
    for (let i:number = 0; i < boxs.length; i++){
      boxcount = boxcount + boxs[i].quantity; 
      
    }
    return boxcount; 
   
  
    
    
  }

  public CountDrink() {
    let drinks: Array<Drink> = this.GetDrink();
    let drinkscount : number =0;
    for(let i:number =0; i<drinks.length; i++){
      drinkscount = drinkscount + drinks[i].quantity;
    }
    return drinkscount;
  }

  public getTotalCount(): number {
    const boxCount: number = this.CountBox();
    const drinkCount: number = this.CountDrink();
    return boxCount + drinkCount;
  }
   
  public clearCartBox (id : number){   
    let monTableau : any = this.GetBox();
    monTableau = monTableau.filter((Box : any) => Box.id !== id);
    this.SetBoxs(monTableau);
  }

  public clearCartDrink(id : number){   
    let monTableau : any = this.GetDrink(); 
    monTableau = monTableau.filter((Drink : any) => Drink.id !== id);
    this.SetDrinks(monTableau);
  }

  public setCommande (commande : Array<any>) {
    localStorage.setItem('commande', JSON.stringify(commande));
  }





}
