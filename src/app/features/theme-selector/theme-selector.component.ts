import { Component } from '@angular/core';
import { ThemeSelectorService } from './theme-selector.service';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss']
})
export class ThemeSelectorComponent {
  selectedTheme = this.themeSelectorService.theme$;

  updateTheme(selectedTheme: number) {
    this.themeSelectorService.updateTheme(selectedTheme);
  }

  constructor( private themeSelectorService: ThemeSelectorService){};
}
