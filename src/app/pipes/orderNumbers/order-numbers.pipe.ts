// src/app/order-numbers.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderNumbers',
  standalone: true
})
export class OrderNumbersPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }

    // Split the string into an array of numbers
    let numbersArray = value.split(',')
      .map(num => num.trim())  // Trim spaces
      .map(Number);            // Convert to numbers

    // Sort the array of numbers
    numbersArray.sort((a, b) => a - b);

    // Slice the array to get only the first 5 numbers
    numbersArray = numbersArray.slice(0, 5);

    // Join the sorted numbers back into a string
    return numbersArray.join(' | ');
  }
}
