import { Component } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';

@Component({
  selector: 'app-roadmap-section',
  standalone: true,
  imports: [NgImageSliderModule],
  templateUrl: './roadmap-section.component.html',
  styleUrl: './roadmap-section.component.css'
})
export class RoadmapSectionComponent {
  imageObject: Array<object> = [
      {
        image: 'assets/oxford.png',
        thumbImage: 'assets/oxford.png',
        alt: 'classroom',
        title: ''
      },
      {
        image: 'assets/cambridge.png',
        thumbImage: 'assets/cambridge.png',
        alt: 'classroom',
        title: ''
      },
      {
        image: 'assets/pearson.png',
        thumbImage: 'assets/pearson.png',
        alt: 'classroom',
        title: ''
      },
      {
        image: 'assets/oxford.png',
        thumbImage: 'assets/oxford.png',
        alt: 'classroom',
        title: ''
      },
      {
        image: 'assets/cambridge.png',
        thumbImage: 'assets/cambridge.png',
        alt: 'classroom',
        title: ''
      },
      {
        image: 'assets/pearson.png',
        thumbImage: 'assets/pearson.png',
        alt: 'classroom',
        title: ''
      },
      {
        image: 'assets/pearson.png',
        thumbImage: 'assets/pearson.png',
        alt: 'classroom',
        title: ''
      },
      {
        image: 'assets/oxford.png',
        thumbImage: 'assets/oxford.png',
        alt: 'classroom',
        title: ''
      },
      {
        image: 'assets/cambridge.png',
        thumbImage: 'assets/cambridge.png',
        alt: 'classroom',
        title: ''
      },
      {
        image: 'assets/pearson.png',
        thumbImage: 'assets/pearson.png',
        alt: 'classroom',
        title: ''
      },

  ]
}
