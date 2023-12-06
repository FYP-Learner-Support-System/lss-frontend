import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

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
