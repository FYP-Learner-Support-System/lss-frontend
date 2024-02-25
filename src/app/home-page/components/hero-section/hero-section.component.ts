import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements OnInit{


  navigationRoute = "/login"
  
  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {

      const token = JSON.parse(localStorage.getItem('myUser') || "[]").token
      //now in status there will be token we make api call and check if that token is expired or not if not then we proceed but for now I am just checking if token is there or not
      if(token){
        this.navigationRoute = "/v1/dashboard"
      }
      else{
          this.navigationRoute = "/login"
      }
    });
  }

  ngOnInit(): void {
      // const status = JSON.parse(localStorage.getItem('myUser') || "[]")
      // console.log("status: ", status)
      // //now in status there will be token we make api call and check if that token is expired or not if not then we proceed but for now I am just checking if token is there or not
      // if(status.token){
      //   this.navigationRoute = "/v1/dashboard"
      //   console.log("navigationRoute: ", this.navigationRoute)
      // }
      // else{
      //   this.navigationRoute = "/login"
      // }
  }

}
