import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {AvatarModule} from 'primeng/avatar'
import { CurrentPathService } from '../../../services/current-path.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { CustomDatePipePipe } from '../../../pipes/custom-date-pipe.pipe';
import { InplaceModule } from 'primeng/inplace';
import { ContentService } from '../../../services/content/content.service';
import { SkeletonModule } from 'primeng/skeleton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { Editor, EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import Quill from 'quill';
import { addMaterial } from '../../../store/material/materials.actions';


@Component({
  selector: 'app-class-material',
  standalone: true,
  imports: [EditorModule,DialogModule,ConfirmDialogModule,SkeletonModule,AvatarModule,NgFor,NgIf, CustomDatePipePipe,InplaceModule,NgClass,FormsModule],
  templateUrl: './class-material.component.html',
  styleUrl: './class-material.component.css'
})
export class ClassMaterialComponent implements OnInit {

  store = inject(Store);
  routerService = inject(CurrentPathService)
  route = inject(Router)
  content!: any;
  activatedRoute = inject(ActivatedRoute)
  contentService = inject(ContentService)
  confirmationService = inject(ConfirmationService)
  messageService = inject(MessageService)
  confirmVisible = false
  id = 0

  selectedFiles: File[] = [];

  showSkeleton = false

  usertype = 0
  visibleBook = false
  visibleAnnouncement = false

  bookObj = {
    ClassroomId: 0,
    Title:"",
    Description:"",
    FileDetailsList : [] as File[]
  }

  announcementObj = {
    announcementId: 0,
    announcementText:"",
  }

  ngOnInit(): void {
    this.store.select('user').subscribe(data=>{
      this.usertype = data.userType
  })

    console.log("usertype: ",this.usertype)
    this.showSkeleton = true
    this.activatedRoute.params.subscribe(data => {

      this.id = +data['id'];
      this.contentService.GetAllMaterial(this.id).subscribe((res)=>{
        console.log(res.body)
        this.store.dispatch(addMaterial({materialList:res.body}))
        this.showSkeleton = false
      })

    });

    this.store.select('material').subscribe(result=>{
      this.content = result
    })

  }

  onFileSelected(event: any): void {
    this.selectedFiles = event.target.files;
  }

  openEditBookDialog(data:any){
    this.visibleBook=true
  }

  openEditAnnounceDialog(data:any){
    this.visibleAnnouncement=true
    this.announcementObj.announcementText = data.announcementText
  }

  editMaterial(){

  }

  editAnnouncement(){

  }

  deleteMaterial(id:number,type:string){
    if(type==="announcement"){
      this.contentService.deleteAnnouncement(id).subscribe(res=>{
        console.log(res)
        this.contentService.GetAllMaterial(this.id).subscribe(materials=>{
          console.log("after deleting: ", materials.body)
          this.store.dispatch(addMaterial({materialList:materials.body}))
        })
        this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: `Record deleted of id ${id}` });
        this.confirmVisible = false
      },error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: "Error Occured! Please try again." });
      })
    }
    else if(type=="classMaterial"){
      this.contentService.deleteMaterial(id).subscribe(res=>{
        console.log(res)
        this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: `Record deleted of id ${id}` });
      },error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: "Error Occured! Please try again." });
      })
    }
  }

  confirm2(event: Event, id:number,type:string) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Do you want to delete this content?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass:"p-button-danger p-button-text fs-6",
        rejectButtonStyleClass:"p-button-text me-3 fs-6",
        acceptIcon:"none",
        rejectIcon:"none",

        accept: () => {
          this.deleteMaterial(id,type)
        },
        // reject: () => {
        //     this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        // }
    });
}

navigateToMaterialItem(materialId:number){
  this.route.navigateByUrl(`/v1/dashboard/classes/${this.id}/materials/${materialId}`)
}
  
}
