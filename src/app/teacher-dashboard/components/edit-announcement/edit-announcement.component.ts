import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AvatarModule } from 'primeng/avatar';
import { ContentService } from '../../../services/content/content.service';
import { CustomDatePipePipe } from '../../../pipes/custom-date-pipe.pipe';
import { RemoveMarginbottomPipe } from "../../../pipes/removeMarginBottom/remove-marginbottom.pipe";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { addMaterial } from '../../../store/material/materials.actions';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-edit-announcement',
    standalone: true,
    templateUrl: './edit-announcement.component.html',
    styleUrl: './edit-announcement.component.css',
    imports: [AvatarModule, CustomDatePipePipe, RemoveMarginbottomPipe,CKEditorModule,FormsModule]
})
export class EditAnnouncementComponent {

  @ViewChild('spinner') spinner!: ElementRef;
  @ViewChild('ckeditor') ckeditor!: ElementRef;
  store = inject(Store);
  activatedRoute = inject(ActivatedRoute)
  route = inject(Router)
  contentService = inject(ContentService)
  classid = 0
  announcementId = 0
  announcement : any = []

  public Editor = ClassicEditor;
  ckeditorConfig: any = {
    toolbar: [
      'Bold', 'Italic'
    ],
    shouldNotGroupWhenFull: true
  };

  announcementObj = {
    announcementId: 0,
    newAnnouncementText:"",
  }

 ngOnInit(): void {

  this.activatedRoute.params.subscribe(data => {

    this.classid = +data['id'];
    this.announcementId = +data['announcementId'];
    this.announcementObj.announcementId = this.announcementId

    this.contentService.GetAllMaterial(this.classid).subscribe((res)=>{

      this.announcement = res.body.filter((each:any)=>{
        return (each.data.announcementId == this.announcementId)
      })
      this.announcementObj.newAnnouncementText = this.announcement[0].data.announcementText
    })

  });
 }

  editAnnouncement(){
    this.spinner.nativeElement.classList.remove('d-none')
    this.contentService.editAnnouncement(this.announcementObj).subscribe(res=>{
      this.contentService.GetAllMaterial(this.classid).subscribe(materials=>{
        // console.log("after Editing: ", materials.body)
        this.store.dispatch(addMaterial({materialList:materials.body}))
      })
      this.spinner.nativeElement.classList.add('d-none')
      this.route.navigateByUrl(`/v1/dashboard/classes/${this.classid}/materials`)
    })
    // console.log(this.announcementObj.newAnnouncementText)
  }
}
