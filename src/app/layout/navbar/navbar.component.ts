import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { MatDrawer } from '@angular/material/sidenav';
import { filter } from 'rxjs';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule,NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input() drawer: MatDrawer;
  loggedIn = false
  currentPath: string = "";

  // Initialize the property in the constructor
  constructor(private router: Router) {
    this.drawer = {} as MatDrawer;

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Access the current route URL
      this.currentPath = event.url;
    });
  }
  
  colorchange:boolean = false;

  ngOnInit(){
    const token = JSON.parse(localStorage.getItem('myUser') || "{}").token
    //now in status there will be token we make api call and check if that token is expired or not if not then we proceed but for now I am just checking if token is there or not
    if(token){
      this.loggedIn = true
    }
    else{
      this.loggedIn = false
    }

    const changeNavbarColor = () =>{
      if(window.scrollY >= 20){
        this.colorchange = true
      }
      else{
        this.colorchange = false;
      }
    };
    
    window.addEventListener('scroll', changeNavbarColor);
  }

  logoutHandler() {
    localStorage.removeItem('myUser');
  }
}
