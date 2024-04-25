import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeMarginbottom',
  standalone: true
})
export class RemoveMarginbottomPipe implements PipeTransform {

  transform(value: string): string {
    // Replace <p> tags with <p class="mb-0">
    return value.replace(/<p\b[^>]*>/g, '<p class="mb-1">');
  }

}
