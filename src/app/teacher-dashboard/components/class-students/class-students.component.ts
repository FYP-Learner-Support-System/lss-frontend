import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AvatarModule } from 'primeng/avatar';
import { CurrentPathService } from '../../../services/current-path.service';
import { Observable, map } from 'rxjs';
import { classesInterface } from '../../../store/classes/classes.module';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ClassService } from '../../../services/class/class.service';

type studentInterface = Array<{
  name: string,
  id: string
}>
type teacherInterface = Array<{
  name: string,
  email: string
}>

@Component({
  selector: 'app-class-students',
  standalone: true,
  imports: [AvatarModule, NgFor,AsyncPipe,NgIf],
  templateUrl: './class-students.component.html',
  styleUrl: './class-students.component.css'
})
export class ClassStudentsComponent implements OnInit {

  store = inject(Store)
  classService = inject(ClassService)
  routerService = inject(CurrentPathService)
  approvedStudents!: any;
  studentRequests!: any;
  teachers!: any;
  activatedRoute = inject(ActivatedRoute)
  userType = 0
  classid = 0

  request = {
    classid: 0,
    studentid: 0
  }
  
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.classid = +data['id'];
      this.classService.GetStudents(this.classid).subscribe(res=>{
        const approved = res?.body.filter((each:any)=>{return each.status === "Enrolled"})
        const rejected = res?.body.filter((each:any)=>{return each.status === "Pending"})
        this.approvedStudents = approved;
        this.studentRequests = rejected;
      })
      
    });

    this.classService.GetClassById(this.classid).subscribe((res)=>{
      console.log(res)
      this.teachers = res?.body?.instructor;
    })

    this.store.select('user').subscribe(data=>{
      this.userType = data.userType;
    })
  }

  acceptRequest(id:number){
    const token = JSON.parse(localStorage.getItem('myUser') || "{}").token
    this.classService.approveRequests(token,{classid:this.classid,studentid:id}).subscribe(res=>{
      this.classService.GetStudents(this.classid).subscribe(res=>{
        const approved = res?.body.filter((each:any)=>{return each.status === "Enrolled"})
        const rejected = res?.body.filter((each:any)=>{return each.status === "Pending"})
        this.approvedStudents = approved;
        this.studentRequests = rejected;
      })
    })
  }

  denyRequest(id:number){
    const token = JSON.parse(localStorage.getItem('myUser') || "{}").token
    this.classService.denyRequests(token,{classid:this.classid,studentid:id}).subscribe(res=>{
      console.log(res)
      this.classService.GetStudents(this.classid).subscribe(res=>{
        const approved = res?.body.filter((each:any)=>{return each.status === "Enrolled"})
        const rejected = res?.body.filter((each:any)=>{return each.status === "Pending"})
        this.approvedStudents = approved;
        this.studentRequests = rejected;
      })
    })
  }
  
  // Add a method to get the class object by ID
  getClassById(id: number): Observable<any> {
    return this.store.select("classes").pipe(
      map((data: any[]) => data.filter(each => each.id === id))
    );
  }

}

