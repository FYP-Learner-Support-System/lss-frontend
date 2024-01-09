import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentPathService {

    //logic to get current path
  currentPath = new BehaviorSubject<string>("");
  currentpath$ = this.currentPath.asObservable();

  currentPathId = new BehaviorSubject<number>(0);
  currentpathId$ = this.currentPath.asObservable();

  isDashboardRoute: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(data=>{
      // console.log("service: ", data)
      this.currentPathId.next(data['id'])
    })

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Access the current route URL
      this.currentPath.next(event.url);

      // Check if the current route or any of its ancestors matches /v1/dashboard
      this.isDashboardRoute = event.url.startsWith("/v1/dashboard");
      // console.log(this.isDashboardRoute, this.currentPath)
      
    });
  }
  //logic to get current path

  getCurrentPath = ()=>{
    return this.currentPath
  }
  getCurrentPathId = ()=>{
    return this.currentPathId
  }
  checkIsDashboardRoute = ()=>{
    return this.isDashboardRoute
  }


}
