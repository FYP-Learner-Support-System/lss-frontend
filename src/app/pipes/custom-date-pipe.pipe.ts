import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDatePipe',
  standalone: true
})
export class CustomDatePipePipe implements PipeTransform {

  transform(date: Date): string {
    let hours = date.getHours();
    let minutes: any = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (12:00 am)

    // Add leading zero to minutes if necessary
    minutes = minutes < 10 ? '0' + minutes : minutes;
    console.log(hours + ':' + minutes + ' ' + ampm)
    return hours + ':' + minutes + ' ' + ampm;
  }

}
