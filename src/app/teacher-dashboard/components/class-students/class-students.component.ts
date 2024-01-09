import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AvatarModule } from 'primeng/avatar';
import { CurrentPathService } from '../../../services/current-path.service';
import { Observable, map } from 'rxjs';
import { classesInterface } from '../../../store/classes/classes.module';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, NgFor } from '@angular/common';

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
  imports: [AvatarModule, NgFor,AsyncPipe],
  templateUrl: './class-students.component.html',
  styleUrl: './class-students.component.css'
})
export class ClassStudentsComponent implements OnInit {

  store = inject(Store)
  routerService = inject(CurrentPathService)
  students!: studentInterface;
  teachers!: any;
  activatedRoute = inject(ActivatedRoute)

  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      const id = +data['id'];
      this.getClassById(id).subscribe(classobj => {
        this.students = classobj[0].students;
        this.teachers = classobj[0].instructor;
        // console.log(classobj[0].students);
      });
    });
  }
  
  // Add a method to get the class object by ID
  getClassById(id: number): Observable<any> {
    return this.store.select("classes").pipe(
      map((data: any[]) => data.filter(each => each.id === id))
    );
  }

}

