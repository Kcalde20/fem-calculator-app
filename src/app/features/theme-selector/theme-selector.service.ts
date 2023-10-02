import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeSelectorService {

  // Subjects
  private theme = new BehaviorSubject<number>(1);

  // Observables
  readonly theme$ = this.theme.asObservable();

  // Methods
  getTheme() {
    // get theme from local storage
  }

  updateTheme(selectedTheme: number) {
    this.theme.next(selectedTheme);
    // save into local storage
  }

  constructor() {}
}
