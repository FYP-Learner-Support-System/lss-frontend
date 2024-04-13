import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDatePipe',
  standalone: true
})
export class CustomDatePipePipe implements PipeTransform {

    transform(dateString: string): string {
      // Parse the input string to get Date object
      const date = new Date(dateString);
  
      // Extract date components
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
  
      // Extract time components
      let hours: any = date.getHours();
      let minutes: any = date.getMinutes();
      // const seconds: any = date.getSeconds();
      // const milliseconds: any = date.getMilliseconds();
  
      // Determine AM/PM
      const ampm = hours >= 12 ? 'PM' : 'AM';
  
      // Convert to 12-hour format
      hours = hours % 12;
      hours = hours ? hours : 12; // Handle midnight (12:00 AM)
  
      // Add leading zero to minutes, seconds, and milliseconds if necessary
      minutes = ('0' + minutes).slice(-2);
      // const formattedSeconds = ('0' + seconds).slice(-2);
      // const formattedMilliseconds = ('00' + milliseconds).slice(-3);
  
      // Construct the formatted date string
      const formattedDate = `${day}/${month}/${year}`;
      const formattedTime = `${hours}:${minutes} ${ampm}`;
  
      return `${formattedDate} ${formattedTime}`;
    }
}