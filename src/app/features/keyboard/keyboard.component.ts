import { Component } from '@angular/core';
import { CalculationsService } from '../display-bar/calculations.service';

@Component({
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
  selector: 'app-keyboard-component',
})
export class KeyboardComponent {


  firstNumber = this.calculationsService.firstNumber$;
  secondNumber = this.calculationsService.secondNumber$;
  operator = this.calculationsService.operator$;

  addDigit(character: string) {
    this.calculationsService.addDigit(character);
  }

  addDecimal(){
    this.calculationsService.addDecimal();
  }

  deleteDigit(){
    this.calculationsService.deleteDigit();
  }

  setOperator(operator: string){
    this.calculationsService.setOperator(operator);
  }

  calculate(){
    this.calculationsService.calculate();
  }

  reset(){
    this.calculationsService.reset();
  }


  constructor(private calculationsService: CalculationsService){}
}
