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
  updateTheme(selectedTheme: number) {
    this.theme.next(selectedTheme);
    document.body.classList.value = '';
    document.body.classList.add('theme-' + this.theme.value);
  }

  constructor() {
  }
}
