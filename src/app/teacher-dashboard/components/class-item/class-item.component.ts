import { Component, Input, OnInit } from '@angular/core';
import { classesInterface } from '../../../store/classes/classes.module';
import {CardModule} from 'primeng/card'
import {PanelModule} from 'primeng/panel'
import {TagModule} from 'primeng/tag'
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

export interface classObj {
  classId: number
  className: string;
  description: string;
  courseCode: string;
  classCode:string;
  instructor: {
    name: string
  }
}

@Component({
  selector: 'app-class-item',
  standalone: true,
  imports: [CardModule,PanelModule,TagModule,NgIf],
  templateUrl: './class-item.component.html',
  styleUrl: './class-item.component.css'
})

export class ClassItemComponent implements OnInit {

  @Input() eachitem!:classObj;
  @Input() userType!:number;
  class!:classObj;

  constructor(private router:Router){}

  ngOnInit(): void {
    this.class = this.eachitem
    // console.log("classitem: ",this.class)
  }

  navigate(){
    this.router.navigateByUrl(`/v1/dashboard/classes/${this.class.classId}/materials`)
  }

}
