import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router,NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs';

import AOS from "aos";
import { NgClass } from '@angular/common';
import { SidenavComponent } from "../components/sidenav/sidenav.component";

@Component({
    selector: 'app-tdashboard',
    standalone: true,
    templateUrl: './tdashboard.component.html',
    styleUrl: './tdashboard.component.css',
    imports: [RouterModule, MatSidenavModule, NgClass, SidenavComponent]
})
export class TdashboardComponent {
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

}
