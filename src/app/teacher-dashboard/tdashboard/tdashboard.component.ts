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
import { UserService } from '../../services/user/user.service';
import { SessionService } from '../../services/session/session.service';

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
  userService = inject(UserService)

  currentPath: string = "";
  isDashboardRoute: boolean = false;
  userName: any;
  sessionService = inject(SessionService)

  constructor(private routeService: CurrentPathService,private drawerService: DrawerService, private route : Router) {
    
  }

  ngAfterViewInit(): void {
    // console.log("tdashboard: ",this.drawer)
    this.drawerService.setDrawer(this.drawer);
  }

  ngOnInit(){

    // const userObj = JSON.parse(localStorage.getItem('myUser') || "{}")
    // this.userService.GetUserDetails(userObj.token).subscribe((result)=>{
    //     this.store.dispatch(adduser({useritem: result.body}))
    // })

    // const token = JSON.parse(localStorage.getItem('myUser') || "{}").token
    // if(token){
    //   this.sessionService.isSessionValid(token).subscribe((res)=>{
    //     if(res){
    //       this.store.select('user').subscribe(data=>{
    //         this.userName = data.firstName + " " + data.lastName
    //         if(this.userName.length > 14){
    //           this.userName = data.lastName
    //         }
    //       })
    //     }
    //     else{
    //       localStorage.removeItem('myUser');
    //       this.route.navigateByUrl('/')
    //     }
    //   },error => {
    //     localStorage.removeItem('myUser');
    //     this.route.navigateByUrl('/')
    //   });  
    // }
    // else{
    //   this.route.navigateByUrl('/')
    // }

    // this.routeService.currentpath$.subscribe(data=>{
    //   this.currentPath = data
    // });
    // setTimeout(() => { 
    //   this.isDashboardRoute = this.routeService.checkIsDashboardRoute();
    // }, 200);
    
    AOS.init();
  }

  logoutHandler() {
    localStorage.removeItem('myUser');
    this.route.navigateByUrl('/')
  }

}
