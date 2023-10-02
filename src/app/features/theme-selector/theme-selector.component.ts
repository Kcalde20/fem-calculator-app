import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss']
})
export class ThemeSelectorComponent {
  selectedTheme: number = 1;

  selectTheme1() {
    this.selectedTheme = 1;
    // this.toggle.className('horizTranslate2');
    // this.toggle.class.remove('horizTranslate3');
    console.log('theme 1 selected');
  }

  selectTheme2() {
    this.selectedTheme = 2;
    // this.toggle.classList.add('horizTranslate2');
    // this.toggle.classList.remove('horizTranslate1');
    // this.toggle.classList.remove('horizTranslate3');
    console.log('theme 2 selected');
  }

  selectTheme3() {
    this.selectedTheme = 3;
    // this.toggle.classList.add('horizTranslate3');
    // this.toggle.classList.remove('horizTranslate1');
    // this.toggle.classList.remove('horizTranslate2');
    console.log('theme 3 selected');
  }
  
  // let toggleSwitch = document.getElementsByClassName('redButton')[0]

  // function go_to_1() {
  //     toggleSwitch.classList.add('horizTranslate1');
  //     toggleSwitch.classList.remove('horizTranslate2');
  //     toggleSwitch.classList.remove('horizTranslate3');
  //     document.getElementById("outerContainer").style.backgroundColor = "#4A5B7E"
  //     document.getElementById("buttonContainer").style.backgroundColor = "#222D41"
  //     document.getElementById("legendTextContainer").style.color = "#ffffff"
  //     doStuff(1)
  // }

  // function go_to_2() {
  //     toggleSwitch.classList.add('horizTranslate2');
  //     toggleSwitch.classList.remove('horizTranslate3');
  //     toggleSwitch.classList.remove('horizTranslate1');
  //     document.getElementById("outerContainer").style.backgroundColor = "#E5E5E5"
  //     document.getElementById("buttonContainer").style.backgroundColor = "#D3CCCA"
  //     document.getElementById("legendTextContainer").style.color = "#222222"
  //     doStuff(2)
  // }

  // function go_to_3() {
  //     toggleSwitch.classList.add('horizTranslate3');
  //     toggleSwitch.classList.remove('horizTranslate2');
  //     toggleSwitch.classList.remove('horizTranslate1');
  //     document.getElementById("outerContainer").style.backgroundColor = "#000000"
  //     document.getElementById("buttonContainer").style.backgroundColor = "#444444"
  //     document.getElementById("legendTextContainer").style.color = "#E2D241"
  //     doStuff(3)
  // }

  // function doStuff(n) {
  //     document.getElementById("message").innerHTML = "Switch is in position " + n
  //     //your code here...
  // }
}
