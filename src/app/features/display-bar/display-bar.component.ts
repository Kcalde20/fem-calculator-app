import { Component } from '@angular/core';
import { CalculationsService } from './calculations.service';

@Component({
  selector: 'app-display-bar',
  templateUrl: './display-bar.component.html',
  styleUrls: ['./display-bar.component.scss']
})
export class DisplayBarComponent {

  displayNumber = this.calculationsService.firstNumber$;

  constructor(private calculationsService: CalculationsService){}
}
