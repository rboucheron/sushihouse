
import { ShoppingcartsService } from '../shoppingcarts.service';
import { LocalService } from '../local.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent  {

  public burguer : boolean = false; 



    constructor(private ShoppingcartsService:ShoppingcartsService, private  LocalService:LocalService){}
    
  
    public itemsCount () {
      return this.LocalService.getTotalCount(); 
    }
    
    public toggleBurguer() :void {
      if ( this.burguer == true) {
        this.burguer = false
      }else{
        this.burguer = true; 
      }
    }
}
