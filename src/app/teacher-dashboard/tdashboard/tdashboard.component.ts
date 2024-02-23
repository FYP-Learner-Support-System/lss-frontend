import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { Router,NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs';

import AOS from "aos";
import { NgClass } from '@angular/common';
import { SidenavComponent } from "../components/sidenav/sidenav.component";
import { DrawerService } from '../../services/drawer-service.service';
import { CurrentPathService } from '../../services/current-path.service';

@Component({
    selector: 'app-tdashboard',
    standalone: true,
    templateUrl: './tdashboard.component.html',
    styleUrl: './tdashboard.component.css',
    imports: [RouterModule, MatSidenavModule, NgClass, SidenavComponent]
})
export class TdashboardComponent implements OnInit{

  @ViewChild('drawer') public drawer!: MatDrawer;

currentPath: string = "";
isDashboardRoute: boolean = false;

constructor(private routeService: CurrentPathService,private drawerService: DrawerService, private route : Router) {
  
}

  ngAfterViewInit(): void {
    // console.log("tdashboard: ",this.drawer)
    this.drawerService.setDrawer(this.drawer);
  }

  ngOnInit(){
    this.routeService.currentpath$.subscribe(data=>{
      this.currentPath = data
    });
    setTimeout(() => { 
      this.isDashboardRoute = this.routeService.checkIsDashboardRoute();
    }, 200);
    AOS.init();
    if(!localStorage.getItem('myUser')){
      this.route.navigateByUrl('/')
    }
  }

}
