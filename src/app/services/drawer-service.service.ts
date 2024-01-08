
import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  drawer!: MatDrawer;

  setDrawer(drawer: MatDrawer): void {
    this.drawer = drawer;
    // console.log("services: ", this.drawer)
  }

  getDrawer(): MatDrawer {
    // console.log("services get func: ",this.drawer)
    return this.drawer;
  }
}