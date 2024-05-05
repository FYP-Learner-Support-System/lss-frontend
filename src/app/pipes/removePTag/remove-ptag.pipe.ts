import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removePTag',
  standalone: true
})
export class RemovePTagPipe implements PipeTransform {

  transform(value: string): string {
    // Replace both starting and closing <p> tags with an empty string
    return value.replace(/<\/?p[^>]*>/g, '');
  }

}
