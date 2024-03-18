import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'underline',
  standalone: true
})
export class UnderlinePipe implements PipeTransform {

  transform(value: string): string {
    // Regular expression to find headings (lines that start with #)
    const headingRegex = /^#\s+(.*)/gm;
    
    // Replace headings with underlines and colons
    return value.replace(headingRegex, (_, heading) => {
      return `<u>${heading}:</u>:`;
    });
  }

}
