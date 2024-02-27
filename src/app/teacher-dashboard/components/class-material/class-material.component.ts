import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {AvatarModule} from 'primeng/avatar'
import { CurrentPathService } from '../../../services/current-path.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';
import { CustomDatePipePipe } from '../../../pipes/custom-date-pipe.pipe';
import { InplaceModule } from 'primeng/inplace';

@Component({
  selector: 'app-class-material',
  standalone: true,
  imports: [AvatarModule,NgFor,NgIf, CustomDatePipePipe,InplaceModule],
  templateUrl: './class-material.component.html',
  styleUrl: './class-material.component.css'
})
export class ClassMaterialComponent implements OnInit {

  store = inject(Store);
  routerService = inject(CurrentPathService)
  content!: any;
  activatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    const classobj = {
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
    this.content = classobj.content

    this.activatedRoute.params.subscribe(data => {
      const id = +data['id'];
      // this.getClassById(id).subscribe(classobj => {
      //   this.content = classobj[0].content;
      //   console.log("content: ",this.content);
      // });
    });
  }
  
  // Add a method to get the class object by ID
  getClassById(id: number): Observable<any> {
    return this.store.select("classes").pipe(
      map((data: any[]) => data.filter(each => each.id === id))
    );
  }

}
