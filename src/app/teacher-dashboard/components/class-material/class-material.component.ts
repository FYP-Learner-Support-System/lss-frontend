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
    this.activatedRoute.params.subscribe(data => {
      const id = +data['id'];
      this.getClassById(id).subscribe(classobj => {
        this.content = classobj[0].content;
        console.log("content: ",this.content);
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
