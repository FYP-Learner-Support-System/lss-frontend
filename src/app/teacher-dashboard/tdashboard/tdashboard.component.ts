import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { Router,NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs';

import AOS from "aos";
import { NgClass } from '@angular/common';
import { SidenavComponent } from "../components/sidenav/sidenav.component";
import { DrawerService } from '../../services/drawer-service.service';
import { CurrentPathService } from '../../services/current-path.service';
import { adduser } from '../../store/user/user.actions';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-tdashboard',
    standalone: true,
    templateUrl: './tdashboard.component.html',
    styleUrl: './tdashboard.component.css',
    imports: [RouterModule, MatSidenavModule, NgClass, SidenavComponent]
})
export class TdashboardComponent implements OnInit{

  @ViewChild('drawer') public drawer!: MatDrawer;
  store = inject(Store)

  currentPath: string = "";
  isDashboardRoute: boolean = false;
  userName: any;

  constructor(private routeService: CurrentPathService,private drawerService: DrawerService, private route : Router) {
    
  }

  ngAfterViewInit(): void {
    // console.log("tdashboard: ",this.drawer)
    this.drawerService.setDrawer(this.drawer);
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

    const userObj = JSON.parse(localStorage.getItem('myUser') || "{}")
    this.store.dispatch(adduser({useritem: userObj}))

    this.store.select('user').subscribe(data=>{
        console.log("user State from dashboard: ",data)
        //now in status there will be token we make api call and check if that token is expired or not if not then we proceed but for now I am just checking if token is there or not
        if(data.token){
          this.userName = data.firstName + " " + data.lastName
          if(this.userName.length > 14){
            this.userName = data.lastName
          }
        }
    })

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

  logoutHandler() {
    localStorage.removeItem('myUser');
    this.route.navigateByUrl('/')
  }

}
