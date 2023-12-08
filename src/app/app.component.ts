import { Component, ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';
import { LayoutModule } from './layout/layout.module';

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import { Router,NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterOutlet, MatChipsModule,LayoutModule,MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  @ViewChild('drawer') drawer!: MatDrawer;
  isDrawerOpen = true;

  // Add a method to toggle the state of the drawer
   toggleDrawer() {
    this.drawer.toggle();
    this.isDrawerOpen = this.drawer.opened;
  }


  //logic to get current path
  currentPath: string = "";

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Access the current route URL
      this.currentPath = event.url;
    });
  }
  //logic to get current path

  title = 'lss-frontend';
}
