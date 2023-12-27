import { Component, Input, OnInit } from '@angular/core';

interface TeamDetails {
  bgimg?: String,
  name?:String,
  domain?:String,
}

@Component({
  selector: 'app-teamcard',
  standalone: true,
  imports: [],
  templateUrl: './teamcard.component.html',
  styleUrl: './teamcard.component.css'
})
export class TeamcardComponent implements OnInit{

  @Input() item!: TeamDetails;
  ngOnInit(){
    console.log(this.item)
  }

}
