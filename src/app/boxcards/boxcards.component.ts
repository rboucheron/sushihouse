import { Component, OnInit } from '@angular/core';
import { BoxService } from '../box.service';

@Component({
  selector: 'app-boxcards',
  templateUrl: './boxcards.component.html',
})
export class BoxcardsComponent implements OnInit {

  boxs: any[] = []; 
  constructor(private boxService: BoxService) {}

  ngOnInit() {
    this.setBoxs();
  }

  setBoxs() {
    this.boxService.getBoxs().subscribe(
      (data: any) => {
        this.boxs = data; 
      },
      (error: any) => {
        console.error('Error fetching api:', error);
      }
    );
  }
}
