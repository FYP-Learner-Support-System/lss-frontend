import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroPrefix',
  standalone: true
})
export class ZeroPrefixPipe implements PipeTransform {

  transform(value: number): string {
    // Add '0' prefix to single-digit numbers
    return value < 10 ? '0' + value : String(value);
  }

}
