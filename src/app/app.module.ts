import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyboardComponent } from './features/keyboard/keyboard.component';
import { DisplayBarComponent } from './features/display-bar/display-bar.component';
import { ThemeSelectorComponent } from './features/theme-selector/theme-selector.component';
import { CalculationsService } from './features/display-bar/calculations.service';
import { ThemeSelectorService } from './features/theme-selector/theme-selector.service';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    DisplayBarComponent,
    ThemeSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CalculationsService, ThemeSelectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
