import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reading-section',
  standalone: true,
  imports: [],
  templateUrl: './reading-section.component.html',
  styleUrl: './reading-section.component.css'
})
export class ReadingSectionComponent implements AfterViewInit {

  aAnimated: boolean = false;
  bAnimated: boolean = false;
  cAnimated: boolean = false;
  dAnimated: boolean = false;
  // Accessing DOM elements with ViewChild
  @ViewChild('a') a: any;
  @ViewChild('b') b: any;
  @ViewChild('c') c: any;
  @ViewChild('d') d: any;
   constructor(private render: Renderer2) {}
   // Counter animation function
   animateValue(obj: { nativeElement: { innerHTML: number; }; }, start: number, end: number, duration: number) {
      let startTimestamp:any = null;
      const step = (timestamp: number) => {
         //  Set the actual time
         if (!startTimestamp) startTimestamp = timestamp;
         // Calculate progress (the time versus the set duration)
         const progress = Math.min((timestamp - startTimestamp) / duration, 1);
         // Calculate the value compared to the progress and set the value in the HTML
         obj.nativeElement.innerHTML = Math.floor(progress * (end - start) + start);
         // If progress is not 100%, an call a new animation of step
         if (progress < 1) window.requestAnimationFrame(step)
      };
      // Call a last animation of step
     window.requestAnimationFrame(step);
   }


   ngAfterViewInit() {

    // Create a scrolling event using Renderer2
    this.render.listen('window', 'scroll', () => {

      // Get element c position
      let aposition = this.a.nativeElement.getBoundingClientRect();
       // Compare it with the height of the window
       if (aposition.top >= 0 && aposition.bottom <= window.innerHeight)    {
          // if it has not been animated  yet, animate c
          if (this.aAnimated == false) {
             this.animateValue(this.a, 0, 80, 2000);
             // prevent animation from running again
             this.aAnimated = true;
          }
        }
        else{
          this.aAnimated = false;
        }
      
      // Get element c position
      let bPosition = this.b.nativeElement.getBoundingClientRect();
       // Compare it with the height of the window
       if (bPosition.top >= 0 && bPosition.bottom <= window.innerHeight)    {
          // if it has not been animated  yet, animate c
          if (this.bAnimated == false) {
             this.animateValue(this.b, 0, 86, 2000);
             // prevent animation from running again
             this.bAnimated = true;
          }
        }
        else{
          this.bAnimated = false;
        }


      // Get element c position
      let cPosition = this.c.nativeElement.getBoundingClientRect();
       // Compare it with the height of the window
       if (cPosition.top >= 0 && cPosition.bottom <= window.innerHeight)    {
          // if it has not been animated  yet, animate c
          if (this.cAnimated == false) {
             this.animateValue(this.c, 0, 5, 1500);
             // prevent animation from running again
             this.cAnimated = true;
          }
        }
        else{
          this.cAnimated = false;
        }

      // Get element d position
      let dPosition = this.d.nativeElement.getBoundingClientRect();
      // Compare it with the height of the window
      if (dPosition.top >= 0 && dPosition.bottom <= window.innerHeight) {
         // if it has not been animated  yet, animate d
         if (this.dAnimated == false) {
         this.animateValue(this.d, 0, 10, 1500);
          // prevent animation from running again
          this.dAnimated = true;
          }
       }
       else{
        this.dAnimated = false;
      }


    });
   }
 


}
