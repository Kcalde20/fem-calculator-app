 import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {


  // Read Only Subjects
  private total = new BehaviorSubject<number>(0);
  private currentInput = new BehaviorSubject<number>(0);
  private mathSymbol = new BehaviorSubject<string | null>(null);

  // Observables
  readonly total$ = this.total.asObservable();
  readonly currentInput$ = this.currentInput.asObservable();
  readonly mathSymbol$ = this.mathSymbol.asObservable();


  // Methods for Current Input
  addDigit(number: number){
    const newValue = parseInt(this.currentInput.value + "" + number);
    this.currentInput.next(newValue);
  }

  deleteDigit(){
    const newValue = parseInt(this.currentInput.value.toString().substring(0, this.currentInput.value.toString().length -1));
    if(this.currentInput.value.toString().length >=2 ){
      this.currentInput.next(newValue);
    } else {
      this.reset();
    };
  }

  addDecimal(){
    // grab currentInput
    // check if decimal exists in currentInput
    // if no, then add one
    // if yes, then do nothing
  }

  reset(){
    this.currentInput.next(0);
  }

  // Methods for Total

  // Methods for Math Symbol
  setMathSymbol(symbol: string){
    // if there is no current value:

    // set symbol
    this.mathSymbol.next(symbol);
    // store currentInput into value
    this.total.next(this.currentInput.value);
    // clear currentInput
    this.reset();

    // if there is a current value:
     // complete current calculation
     // add new symbol
     // clear currentInput
  }

  constructor() { }
}
