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
import { RemoveMarginbottomPipe } from "../../../pipes/removeMarginBottom/remove-marginbottom.pipe";


@Component({
    selector: 'app-class-material-item',
    standalone: true,
    templateUrl: './class-material-item.component.html',
    styleUrl: './class-material-item.component.css',
    imports: [EditorModule, DialogModule, ConfirmDialogModule, SkeletonModule, AvatarModule, NgFor, NgIf, CustomDatePipePipe, InplaceModule, NgClass, FormsModule, RemoveMarginbottomPipe]
})
export class ClassMaterialItemComponent implements OnInit {

  store = inject(Store);
  activatedRoute = inject(ActivatedRoute)
  contentService = inject(ContentService)
  classid = 0
  materialId = 0
  materialItem : any = []

 ngOnInit(): void {
  this.activatedRoute.params.subscribe(data => {

    this.classid = +data['id'];
    this.materialId = +data['materialId'];
    console.log(this.classid,this.materialId)
    this.contentService.GetAllMaterial(this.classid).subscribe((res)=>{
      console.log("materails List: ",res.body)
      this.materialItem = res.body.filter((each:any)=>{
        return (each.data.classMaterialId == this.materialId)
      })
      console.log("material Item: ",this.materialItem)
    })

  });
 }

 downloadBook(materialId:number,bookId:number,fileName:string){
  console.log("clicked")
  this.contentService.downloadBook(materialId,bookId).subscribe((blob: Blob) => {
    console.log(blob)
    // Create a blob URL for the Blob object
    const url = window.URL.createObjectURL(blob);
    // Create a link element
    const link = document.createElement('a');
    // Set link attributes
    link.href = url;
    link.download = fileName; // Specify the filename
    // Append the link to the document body
    document.body.appendChild(link);
    // Programmatically click the link to trigger the file download
    link.click();
    // Cleanup: remove the link and revoke the URL
    link.remove();
    window.URL.revokeObjectURL(url);
  }, error => {
    console.error('Error downloading PDF:', error);
  });

 }
}
