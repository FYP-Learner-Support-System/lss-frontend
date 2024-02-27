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
import { FormsModule } from '@angular/forms';
import { ClassService } from '../../../services/class/class.service';


@Component({
    selector: 'app-class-content',
    standalone: true,
    templateUrl: './class-content.component.html',
    styleUrl: './class-content.component.css',
    imports: [TabMenuModule, BadgeModule, NgIf, NgFor, NgClass, ClassMaterialComponent, ClassStudentsComponent, ClassChatComponent,DialogModule,ScrollTopModule, FormsModule]
})
export class ClassContentComponent implements OnInit,AfterViewInit {

  constructor(private routeService: CurrentPathService, private drawerService: DrawerService, private activatedRoute:ActivatedRoute) {}

  store = inject(Store)
  classService = inject(ClassService)
  drawer!: MatDrawer;
  disabled:boolean=true;

  currentClassId!:number;
  materialroute:string = ""
  studentsroute:string = ""
  chatroute:string = ""
  usertype = 0
  visible: boolean = false;

  currentPath: string = "";

  currentClass!:any;

  question: string=""

  ngAfterViewInit(): void {
    setTimeout(() => {  
        const drawer = this.drawerService.getDrawer();
        this.drawer = drawer
        this.disabled = false
        // console.log("class component: ",drawer)
    }, 500);

  }

  ngOnInit(): void {

    this.store.select('user').subscribe(data=>{
      this.usertype = data.userType
  })
    
    this.routeService.currentpath$.subscribe(data=>{
      this.currentPath = data
    })

    this.currentClass = {
      id: 1,
      name: "NLP 101",
      description: "Introduction to NLP",
      courseCode: "NLP101",
      content: [
        {
          name: "Dr. Saman Hina",
          timeStamp: new Date,
          post: { fileName: "NLP Introduction Slides", fileType: "PDF", thumbnail: "" },
          postType: "file",
        },
        {
          name: "Dr. Saman Hina",
          timeStamp: new Date,
          post: "Welcome to NLP 101! In this course, we'll explore the fundamentals of Natural Language Processing. I'm excited to embark on this learning journey with you. Please check the course materials for the syllabus and get ready for an engaging semester!",
          postType: "announcement",
        },
      ],
      instructor: {
        name: "Dr. Saman Hina",
        email: "samanhina123@gmail.com",
      },
      students: [
        { name: "Muhammad Abdul Rafay", id: "A123" },
        { name: "Muhammad Uzair Khan", id: "B456" },
        { name: "Faseeh Ur Rehman", id: "B456" },
      ],
    }
    this.activatedRoute.params.subscribe(data=>{
      this.currentClassId = data['id']
      // this.getClassCode(+this.currentClassId).subscribe(data=>{
      //   this.currentClass = data[0]
      // })
      this.materialroute = `/v1/dashboard/classes/${this.currentClassId}/materials`
      this.studentsroute = `/v1/dashboard/classes/${this.currentClassId}/students`
      this.chatroute = `/v1/dashboard/classes/${this.currentClassId}/chat`
    })

    this.classService.GetClassById(this.currentClassId).subscribe((res)=>{
      console.log(res)
      this.currentClass['courseCode'] = res?.body?.courseCode;
    })

  }

  getClassCode(id:number): Observable<any>{
    return this.store.select('classes').pipe(map((data: any[])=>data.filter(each => each.id === id)))
  }

  showDialog() {
    this.visible = true;
  }


}