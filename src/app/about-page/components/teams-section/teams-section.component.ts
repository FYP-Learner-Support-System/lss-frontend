import { Component } from '@angular/core';
import { TeamcardComponent } from '../teamcard/teamcard.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-teams-section',
  standalone: true,
  imports: [TeamcardComponent,NgFor],
  templateUrl: './teams-section.component.html',
  styleUrl: './teams-section.component.css'
})
export class TeamsSectionComponent {

  teamdetails: Array<object> = [
    {
      bgimg:"https://thetork.com/demos/html/bitrader/assets/images/team/1-dark.png",
      name:"Abdul Rafay",
      domain:"Front-end developer",
    },
    {
      bgimg:"https://thetork.com/demos/html/bitrader/assets/images/team/2-dark.png",
      name:"Faseeh ur Rehman",
      domain:"Backend developer"
    },
    {
      bgimg:"https://thetork.com/demos/html/bitrader/assets/images/team/3-dark.png",
      name:"Muhammad Uzair",
      domain:"Data Scientist"
    },
  ]
}
