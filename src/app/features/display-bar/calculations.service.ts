 import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {

  // Subjects
  private firstNumber = new BehaviorSubject<string>('');
  private secondNumber = new BehaviorSubject<string>('');
  private operator = new BehaviorSubject<string>('');
  private result = new BehaviorSubject<number>(0);

  // Observables
  readonly firstNumber$ = this.firstNumber.asObservable();
  readonly secondNumber$ = this.secondNumber.asObservable();
  readonly operator$ = this.operator.asObservable();

  // Methods
  addDigit(character: string){
    const firstNumber = this.firstNumber.value;
    this.firstNumber.next(firstNumber + character);
  }

  deleteDigit(){
    const firstNumber = this.firstNumber.value;
    this.firstNumber.next(firstNumber.slice(0, -1));
  }

  addDecimal(){
    const firstNumber = this.firstNumber.value;
    if(this.firstNumber.value.indexOf(".") == -1) {
      this.addDigit('.');
    } else {
      return;
    }
  }

  setOperator(operator: string){
    this.operator.next(operator);
    this.secondNumber.next(this.firstNumber.value);
    this.firstNumber.next('');
  }

  reset(){
    this.firstNumber.next('');
    this.secondNumber.next('');
    this.operator.next('');
  }


  calculate(){
    const operator = this.operator.value;
    const firstNumber = parseFloat(this.firstNumber.value);
    const secondNumber = parseFloat(this.secondNumber.value);

    let results;
    
    switch(operator) {
      case '+':
        results = secondNumber + firstNumber;
        this.reset();
        this.firstNumber.next(results.toString());

        break;
      
      case '-':
        results = secondNumber - firstNumber;
        this.reset();
        this.firstNumber.next(results.toString());
        break;
      
      case '*':
        results = secondNumber * firstNumber;
        this.reset();
        this.firstNumber.next(results.toString());
        break;
      
      case '/':
        results = secondNumber / firstNumber;
        this.reset();
        this.firstNumber.next(results.toString());
        break;
      
      default:
        console.log('Invalid Operator');
        break;
    }
  }

  constructor() { }
}
