import { Component } from '@angular/core';
import { CalculationsService } from '../display-bar/calculations.service';

@Component({
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
  selector: 'app-keyboard-component',
})
export class KeyboardComponent {

  currentInput = this.calculationsService.currentInput$;
  Total = this.calculationsService.total$;

  addDigit(number: number){
    this.calculationsService.addDigit(number);
  }

  deleteDigit(){
    this.calculationsService.deleteDigit();
  }

  resetCalc(){
    this.calculationsService.reset();
  }

  constructor(private calculationsService: CalculationsService){}
}
