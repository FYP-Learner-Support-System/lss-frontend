import { Component, OnInit, ViewChild  } from '@angular/core';
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
import { CurrentPathService } from './services/current-path.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterOutlet, MatChipsModule,LayoutModule,MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  currentPath: string = "";
  isDashboardRoute: boolean = false;
  constructor(private routeService: CurrentPathService){}

  ngOnInit(): void{
    setTimeout(() => { 
      this.currentPath = this.routeService.getCurrentPath();
      this.isDashboardRoute = this.routeService.checkIsDashboardRoute();
    }, 200);
    AOS.init();
  }

  title = 'AskSphere - Home';
}
