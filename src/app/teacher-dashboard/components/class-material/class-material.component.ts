import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {AvatarModule} from 'primeng/avatar'
import { CurrentPathService } from '../../../services/current-path.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';
import { CustomDatePipePipe } from '../../../pipes/custom-date-pipe.pipe';
import { InplaceModule } from 'primeng/inplace';
import { ContentService } from '../../../services/content/content.service';


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
  contentService = inject(ContentService)

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      const id = +data['id'];
      this.contentService.GetAllMaterial(id).subscribe((res)=>{
        console.log(res.body)
        this.content = res.body
      })
    });
  }
  
}
