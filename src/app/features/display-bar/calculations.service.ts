import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {


  // Read Only Subjects
  private total = new BehaviorSubject<number>(0);
  private currentInput = new BehaviorSubject<number | 0 >(0);

  // Observables
  readonly total$ = this.total.asObservable();
  readonly currentInput$ = this.currentInput.asObservable();


  // Methods
  addDigit(number: number){
    const newValue = parseInt(this.currentInput.value + "" + number);
    console.log("new currentInput:", newValue);
    this.currentInput.next(newValue);
  }

  reset(){
    this.currentInput.next(0);
  }


  constructor() { }
}
