import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import {Router, RouterModule} from "@angular/router"

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  @Input() currentPath!: string;

  userName: any;

  constructor(private route : Router) {
    
  }

  ngOnInit(){
    const status = JSON.parse(localStorage.getItem('myUser') || "[]")
    console.log("status: ", status)
    //now in status there will be token we make api call and check if that token is expired or not if not then we proceed but for now I am just checking if token is there or not
    if(status.token){
      this.userName = JSON.parse(localStorage.getItem('myUser') || "[]").firstName + " " + JSON.parse(localStorage.getItem('myUser') || "[]").lastName
      if(this.userName.length > 14){
        this.userName = JSON.parse(localStorage.getItem('myUser') || "[]").lastName
      }
    }
  }

  logoutHandler() {
    localStorage.removeItem('myUser');
    this.route.navigateByUrl('/')
  }


}
