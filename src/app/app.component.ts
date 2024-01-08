import { Component, ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';
import { LayoutModule } from './layout/layout.module';

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import { Router,NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';

import AOS from "aos";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterOutlet, MatChipsModule,LayoutModule,MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //logic to get current path
  currentPath: string = "";
  isDashboardRoute: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Access the current route URL
      this.currentPath = event.url;

      // Check if the current route or any of its ancestors matches /v1/dashboard
      this.isDashboardRoute = event.url.startsWith("/v1/dashboard");
      // this.isDashboardRoute = this.activatedRoute.snapshot.pathFromRoot.some(route => route.routeConfig?.path === '/v1/dashboard');
      console.log(this.isDashboardRoute, this.currentPath)
    });
  }
  //logic to get current path



  ngOnInit(){
    AOS.init();
   
  }

  title = 'AskSphere - Home';
}
