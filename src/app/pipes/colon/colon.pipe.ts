import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colon',
  standalone: true
})
export class ColonPipe implements PipeTransform {

  transform(value: string): string {
    // Regular expression to match headings (lines that start with #)
    const headingRegex = /^(#+\s+.*)$/gm;

    // Replace each heading with itself plus a colon
    return value.replace(headingRegex, (match) => {
      return match + ":";
    });
  }

}
