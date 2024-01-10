import { NgClass, NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { TabMenuModule } from 'primeng/tabmenu';
import { DrawerService } from '../../../services/drawer-service.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CurrentPathService } from '../../../services/current-path.service';
import { ClassMaterialComponent } from "../class-material/class-material.component";
import { ClassStudentsComponent } from "../class-students/class-students.component";
import { ClassChatComponent } from '../class-chat/class-chat.component';
import { DialogModule } from 'primeng/dialog';
import { ScrollTopModule } from 'primeng/scrolltop';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';


@Component({
    selector: 'app-class-content',
    standalone: true,
    templateUrl: './class-content.component.html',
    styleUrl: './class-content.component.css',
    imports: [TabMenuModule, BadgeModule, NgIf, NgFor, NgClass, ClassMaterialComponent, ClassStudentsComponent, ClassChatComponent,DialogModule,ScrollTopModule]
})
export class ClassContentComponent implements OnInit,AfterViewInit {

  constructor(private routeService: CurrentPathService, private drawerService: DrawerService, private activatedRoute:ActivatedRoute) {}

  store = inject(Store)

  drawer!: MatDrawer;
  disabled:boolean=true;

  currentClassId!:number;
  materialroute:string = ""
  studentsroute:string = ""
  chatroute:string = ""

  visible: boolean = false;

  currentPath: string = "";

  currentClass!:any;

  ngAfterViewInit(): void {
    setTimeout(() => {  
        const drawer = this.drawerService.getDrawer();
        this.drawer = drawer
        this.disabled = false
        // console.log("class component: ",drawer)
    }, 500);

  }
  ngOnInit(): void {
    this.routeService.currentpath$.subscribe(data=>{
      this.currentPath = data
    })

    this.activatedRoute.params.subscribe(data=>{
      this.currentClassId = data['id']
      this.getClassCode(+this.currentClassId).subscribe(data=>{
        this.currentClass = data[0]
      })
      this.materialroute = `/v1/dashboard/classes/${this.currentClassId}/materials`
      this.studentsroute = `/v1/dashboard/classes/${this.currentClassId}/students`
      this.chatroute = `/v1/dashboard/classes/${this.currentClassId}/chat`
    })

  }

  getClassCode(id:number): Observable<any>{
    return this.store.select('classes').pipe(map((data: any[])=>data.filter(each => each.id === id)))
  }

  showDialog() {
    this.visible = true;
  }


}