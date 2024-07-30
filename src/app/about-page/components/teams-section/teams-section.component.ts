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
      bgimg:"../../../assets/rafayportrait2.png",
      name:"Muhammad Abdul Rafay",
      domain:"Front-end Developer",
    },
    {
      bgimg:"../../../assets/faseeh.png",
      name:"Faseeh Ur Rehman",
      domain:"Backend Developer"
    },
    {
      bgimg:"../../../assets/uzair.png",
      name:"Muhammad Uzair",
      domain:"AI/ML Engineer"
    },
  ]
}
