import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bold',
  standalone: true
})
export class BoldPipe implements PipeTransform {

  transform(value: string): string {
    // Use regular expression to replace **text** with <strong>text</strong>
    return value.replace(/\*\*(.*?)\*\*/g, '<strong><u>$1</u></strong>');
  }

}
