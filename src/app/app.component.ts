import { ChangeDetectorRef, Component, ViewChild, inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationStart, RouterEvent, RouterModule, RouterOutlet } from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';
import { LayoutModule } from './layout/layout.module';

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import { Router,NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';


import AOS from "aos";
import { Store } from '@ngrx/store';
import { adduser } from './store/user/user.actions';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterOutlet, MatChipsModule,LayoutModule,MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule,MatProgressBarModule,ToastModule,AvatarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //logic to get current path
  currentPath: string = "";
  isDashboardRoute: boolean = false;
  isloginRoute: boolean = false;
  issignupRoute: boolean = false;
  isresetRoute: boolean = false;
  isnewpassRoute: boolean = false;
  progress = 0;
  loggedIn: boolean = false;
  userName: any;

  store = inject(Store)

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Access the current route URL
      this.currentPath = event.url;

      // Check if the current route or any of its ancestors matches /v1/dashboard
      this.isDashboardRoute = event.url.startsWith("/v1/dashboard");
      this.isloginRoute = event.url.startsWith("/login");
      this.issignupRoute = event.url.startsWith("/signup");
      this.isresetRoute = event.url.startsWith("/resetpassword");
      this.isnewpassRoute = event.url.startsWith("/newpassword");
      
      // this.isDashboardRoute = this.activatedRoute.snapshot.pathFromRoot.some(route => route.routeConfig?.path === '/v1/dashboard');
      console.log(this.isDashboardRoute, this.currentPath)
    });
  }
  //logic to get current path


  ngOnInit(){
    console.log("app called")
    const userObj = JSON.parse(localStorage.getItem('myUser') || "{}")
    this.store.dispatch(adduser({useritem: userObj}))

    this.store.select('user').subscribe(data=>{
        console.log("user State from app: ",data)
        //now in status there will be token we make api call and check if that token is expired or not if not then we proceed but for now I am just checking if token is there or not
        if(data.token){
          this.loggedIn = true
          this.userName = data.firstName + " " + data.lastName
          if(this.userName.length > 14){
            this.userName = data.lastName
          }
          console.log("status: ", this.loggedIn)
        }
        else{
          this.loggedIn = false
        }
    })


    AOS.init()
  }

  logoutHandler() {
    localStorage.removeItem('myUser');
    this.loggedIn = false
    location.reload();
  }

  title = 'AskSphere - Home';
}
