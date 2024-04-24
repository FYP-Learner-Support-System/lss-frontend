import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDatePipe',
  standalone: true
})
export class CustomDatePipePipe implements PipeTransform {

  transform(dateString: string): string {
    // Parse the input string to get Date object
    const date = new Date(dateString);

    // Define month names
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ];

    // Extract date components
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const monthName = monthNames[monthIndex];
    const day = ('0' + date.getDate()).slice(-2);

    // Extract time components
    let hours: any = date.getHours();
    let minutes: any = date.getMinutes();

    // Determine AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (12:00 AM)

    // Add leading zero to minutes if necessary
    minutes = ('0' + minutes).slice(-2);

    // Construct the formatted date string
    const formattedDate = `${day} ${monthName} ${year}`;
    const formattedTime = `${hours}:${minutes} ${ampm}`;

    return `${formattedDate} ${formattedTime}`;
  }
}
