import { Component, Input, OnInit } from '@angular/core';
import { classesInterface } from '../../../store/classes/classes.module';
import {CardModule} from 'primeng/card'
import {PanelModule} from 'primeng/panel'
import {TagModule} from 'primeng/tag'
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-item',
  standalone: true,
  imports: [CardModule,PanelModule,TagModule],
  templateUrl: './class-item.component.html',
  styleUrl: './class-item.component.css'
})
export class ClassItemComponent implements OnInit {

  @Input() eachitem!:any;
  class!:any;

  constructor(private router:Router){}

  ngOnInit(): void {
    this.class = this.eachitem
    // console.log("classitem: ",this.class)
  }

  navigate(){
    this.router.navigateByUrl(`/v1/dashboard/classes/${this.class.id}/materials`)
  }

}
