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
        image: 'assets/gemini.png',
        thumbImage: 'assets/gemini.png',
        alt: 'classroom',
        title: ''
      },
      {
        image: 'assets/angular.png',
        thumbImage: 'assets/angular.png',
        alt: 'classroom',
        title: ''
      },
      {
        image: 'assets/aws.png',
        thumbImage: 'assets/aws.png',
        alt: 'classroom',
        title: ''
      },
      {
        image: 'assets/azure.png',
        thumbImage: 'assets/azure.png',
        alt: 'classroom',
        title: ''
      },
      {
        image: 'assets/python.png',
        thumbImage: 'assets/python.png',
        alt: 'classroom',
        title: ''
      },
      {
        image: 'assets/dotnet.png',
        thumbImage: 'assets/dotnet.png',
        alt: 'classroom',
        title: ''
      },
      {
        image: 'assets/gemini.png',
        thumbImage: 'assets/gemini.png',
        alt: 'classroom',
        title: ''
      },
      {
        image: 'assets/angular.png',
        thumbImage: 'assets/angular.png',
        alt: 'classroom',
        title: ''
      },
      {
        image: 'assets/aws.png',
        thumbImage: 'assets/aws.png',
        alt: 'classroom',
        title: ''
      },
      {
        image: 'assets/azure.png',
        thumbImage: 'assets/azure.png',
        alt: 'classroom',
        title: ''
      },
      {
        image: 'assets/python.png',
        thumbImage: 'assets/python.png',
        alt: 'classroom',
        title: ''
      },
      {
        image: 'assets/dotnet.png',
        thumbImage: 'assets/dotnet.png',
        alt: 'classroom',
        title: ''
      }
  ]
}
