import { Component, OnInit, Input, input} from '@angular/core';
import { Box } from '../../model/box';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',

})
export class CardComponent {
  @Input() Box!: Box; 


}
