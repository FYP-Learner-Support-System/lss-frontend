import { AfterViewInit, Component, ElementRef, Input, NgModule, OnInit, ViewChild, inject } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DrawerService } from '../../../services/drawer-service.service';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { Store } from '@ngrx/store';
import { NgFor, NgIf } from '@angular/common';
import { ClassItemComponent } from "../class-item/class-item.component";
import { FormsModule } from '@angular/forms';
import { fetchclass } from '../../../store/classes/classes.actions';
import { ClassService } from '../../../services/class/class.service';
import { MessageService } from 'primeng/api';
import { SkeletonModule } from 'primeng/skeleton';
import { TooltipModule } from 'primeng/tooltip';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BadgeModule } from 'primeng/badge';


@Component({
    selector: 'app-class-page',
    standalone: true,
    templateUrl: './class-page.component.html',
    styleUrl: './class-page.component.css',
    imports: [DialogModule, AvatarModule, NgIf,NgFor, ClassItemComponent,FormsModule,SkeletonModule,TooltipModule,OverlayPanelModule,BadgeModule]
})
export class ClassPageComponent implements AfterViewInit, OnInit {

   constructor(private drawerService: DrawerService) {}
   @ViewChild('spinner') spinner!: ElementRef;
   store = inject(Store);
   classService = inject(ClassService);
   messageService = inject(MessageService)

   drawer!: MatDrawer;
   disabled:boolean=true;
   value: string | undefined;
   visible: boolean = false;
   visible1: boolean = false;
   visible2: boolean = false;
   classList:object[] = [];
   usertype = 0

   showSkeleton = false

   addClass = {className:"",courseCode:"",courseName:""}

   joinClass = ""
   classcode = ""

  ngAfterViewInit(): void {
    setTimeout(() => {  
        const drawer = this.drawerService.getDrawer();
        this.drawer = drawer
        this.disabled = false
        // console.log("class component: ",drawer)
    }, 500);

    // Now you can use the 'drawer' reference in this component
    }

    ngOnInit(): void {
        const token = JSON.parse(localStorage.getItem('myUser') || "{}").token
        this.store.select('user').subscribe((result)=>{
            if(result.userType===0){
                this.showSkeleton = true
                this.classService.GetStudentClassList(token).subscribe(res=>{
                    console.log("joined classes",res?.body)
                    this.store.dispatch(fetchclass({classlist:res?.body}))
                    this.showSkeleton = false
                })
            }else if(result.userType===1){
                this.showSkeleton = true
                this.classService.GetTeacherClassList(token).subscribe((res)=>{
                    console.log("res: ",res?.body)
                    this.store.dispatch(fetchclass({classlist:res?.body}))
                    this.showSkeleton = false
                })
            } 
        })

        this.store.select('classes').subscribe(data=> this.classList = data)

        this.store.select('user').subscribe(data=>{
            this.usertype = data.userType
        })
    }

    submitForm(){
        this.spinner.nativeElement.classList.remove('d-none')
        const token = JSON.parse(localStorage.getItem('myUser') || "{}").token
        this.classService.createClass(token,this.addClass).subscribe((res)=>{
            console.log("class creation:",res)
            this.spinner.nativeElement.classList.add('d-none')
            this.messageService.add({key: 'tl', severity: 'success', summary: 'Success', detail: res?.body?.message });
            this.store.select('classes').subscribe(data=> this.classList = data)
            this.classcode = res?.body?.joiningCode
            this.visible = false
            this.visible2 = true
        })
    }

    enrollInClass(){
        this.spinner.nativeElement.classList.remove('d-none')
        const token = JSON.parse(localStorage.getItem('myUser') || "{}").token
        this.classService.joinClass(token,this.joinClass).subscribe((res)=>{
            console.log("class joining:",res)
            this.spinner.nativeElement.classList.add('d-none')
            this.messageService.add({key: 'tl', severity: 'success', summary: 'Success', detail: res?.body?.message });
            this.visible1 = false;
        },error => {
            this.spinner.nativeElement.classList.add('d-none')
            this.messageService.add({key: 'tl', severity: 'error', summary: 'Error', detail: "Error Occured! Please try again later." });
        })
    }

    copyCode(){
        navigator.clipboard.writeText(this.classcode).then(() => {
            console.log('Value copied to clipboard:', this.classcode);
            this.messageService.add({key: 'tl', severity: 'success', summary: 'Success', detail: "Copied Successfully" });
            this.visible2 = false;
            location.reload();
          }, error => {
            console.error('Error copying value to clipboard:', error);
            alert('Error copying value to clipboard');
          });
    }

    showDialog() {
        if(this.usertype === 0)
        {
            this.visible1 = true;
        }
        else{
            this.visible = true;
        }
    }


}
