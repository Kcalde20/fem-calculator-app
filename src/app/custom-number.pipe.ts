import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customNumber'
})
export class CustomNumberPipe implements PipeTransform {
  transform(value: any): string {
    // Convert the input to a string
    const strValue = String(value);

    // Check if the input contains a decimal point
    const parts = strValue.split('.');
    if (parts.length === 2) {
      // If there's a decimal point, add commas before it
      const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return `${integerPart}.${parts[1]}`;
    } else {
      // If there's no decimal point, add commas to the whole number
      return strValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }
}
