import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDrawer } from '@angular/material/sidenav';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input() drawer: MatDrawer;

  // Initialize the property in the constructor
  constructor() {
    this.drawer = {} as MatDrawer;
  }
  
  colorchange:boolean = false;

  ngOnInit(){
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
}
