import { Component } from '@angular/core';
import { slideInOutAnimation } from '../route-animations';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss'],
  animations:[slideInOutAnimation],
  host:{'[@slideInOutAnimation]': '' }
})
export class InstructionComponent  {


}
