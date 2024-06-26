import { Location, NgClass, NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { TabMenuModule } from 'primeng/tabmenu';
import { DrawerService } from '../../../services/drawer-service.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CurrentPathService } from '../../../services/current-path.service';
import { ClassMaterialComponent } from "../class-material/class-material.component";
import { ClassStudentsComponent } from "../class-students/class-students.component";
import { ClassChatComponent } from '../class-chat/class-chat.component';
import { DialogModule } from 'primeng/dialog';
import { ScrollTopModule } from 'primeng/scrolltop';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClassService } from '../../../services/class/class.service';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import {AvatarModule} from 'primeng/avatar'
import { MenuModule } from 'primeng/menu';
import { EditorModule } from 'primeng/editor';
import { ContentService } from '../../../services/content/content.service';
import { MessageService } from 'primeng/api';
import { addMaterial } from '../../../store/material/materials.actions';
import { ClassMaterialItemComponent } from "../class-material-item/class-material-item.component";
import { EditAnnouncementComponent } from "../edit-announcement/edit-announcement.component";

@Component({
    selector: 'app-class-content',
    standalone: true,
    templateUrl: './class-content.component.html',
    styleUrl: './class-content.component.css',
    imports: [EditorModule, MenuModule, InputTextareaModule, TabMenuModule, AvatarModule, BadgeModule, NgIf, NgFor, NgClass, ClassMaterialComponent, ClassStudentsComponent, ClassChatComponent, DialogModule, ScrollTopModule, FormsModule, TooltipModule, OverlayPanelModule, ClassMaterialItemComponent, EditAnnouncementComponent]
})
export class ClassContentComponent implements OnInit,AfterViewInit {

  constructor(private routeService: CurrentPathService, private drawerService: DrawerService, private activatedRoute:ActivatedRoute) {}

  @ViewChild('chatContainer') chatContainer!: ElementRef;
  @ViewChild('messageInput') messageInput!: ElementRef;
  @ViewChild('classChatComponent') classChatComponent!: ClassChatComponent;
  @ViewChild('spinner') spinner!: ElementRef;

  scrollFlag = false;
  
  items: MenuItem[] | undefined;
  store = inject(Store)
  classService = inject(ClassService)
  contentService = inject(ContentService)
  messageService = inject(MessageService)
  location = inject(Location)
  drawer!: MatDrawer;
  disabled:boolean=true;

  currentClassId!:number;
  materialId!:number;
  materialroute:string = ""
  studentsroute:string = ""
  chatroute:string = ""
  materialItemRoute = ""
  editAnnouncementRoute = ""
  usertype = 0
  visible: boolean = false;
  visible1: boolean = false;

  id = 0

  currentPath: string = "";

  courseCode!:any;

  question: string=""

  selectedFiles: File[] = [];

  bookObj = {
    ClassroomId: 0,
    Title:"",
    Description:"",
    FileDetailsList : [] as File[]
  }

  announcementObj = {
    ClassroomId: 0,
    announcementText:"",
  }

  ngAfterViewInit(): void {
    this.bookObj.ClassroomId = this.currentClassId;
    this.announcementObj.ClassroomId = this.currentClassId;

    if(this.currentPath.includes("chat")){
      this.scrollToBottom();
    }
    setTimeout(() => {  
        const drawer = this.drawerService.getDrawer();
        this.drawer = drawer
        this.disabled = false
        // console.log("class component: ",drawer)
    }, 500);
    
  }

  scrollToBottom(): void {
    if(!this.scrollFlag){
      try {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
        // console.log(this.chatContainer.nativeElement.scrollTop)
      } catch(err) { }
    }
  }

  handleBooleanValue(value: boolean): void {
    this.scrollFlag = value
    console.log('Received boolean value from child:', value);
    // Do something with the received boolean value
  }

  ngOnInit(): void {

    this.items = [
      {
          items: [
              {
                  label: 'New Announcement',
                  icon: 'pi pi-megaphone',
                  command: () => {
                      this.showDialog1()
                  }
              },
              {
                  label: 'Book Upload',
                  icon: 'pi pi-book',
                  command: () => {
                    this.showDialog()
                  }
              }
          ]
      },
  ];

    this.store.select('user').subscribe(data=>{
      this.usertype = data.userType
  })
    
    this.routeService.currentpath$.subscribe(data=>{
      this.currentPath = data
    })

    this.activatedRoute.params.subscribe(data=>{
      this.currentClassId = +data['id']
      this.materialId = +data['materialId']
      this.materialroute = `/v1/dashboard/classes/${this.currentClassId}/materials`
      this.materialItemRoute = `/v1/dashboard/classes/${this.currentClassId}/materials/${this.materialId}`
      this.editAnnouncementRoute = `/v1/dashboard/classes/${this.currentClassId}/materials/edit/${+data['announcementId']}`
      this.studentsroute = `/v1/dashboard/classes/${this.currentClassId}/students`
      this.chatroute = `/v1/dashboard/classes/${this.currentClassId}/chat`
    })

    this.classService.GetClassById(this.currentClassId).subscribe((res)=>{
      console.log(res)
      this.courseCode = res?.body?.courseCode;
    })

  }

  getClassCode(id:number): Observable<any>{
    return this.store.select('classes').pipe(map((data: any[])=>data.filter(each => each.id === id)))
  }

  showDialog() {
    this.visible = true;
  }

  showDialog1() {
    this.visible1 = true;
  }

  sendQuery(){
    this.question = ""
    this.classChatComponent.updateChat();
  }

  onEnter(event: any) {
    if (!event.shiftKey) {
      event.preventDefault(); // Prevent the default Enter behavior (e.g., new line)
      this.sendQuery(); // Call the send message function
    }
  }

  insertNewLine(event: any) {
    if (event.shiftKey) {
      const textarea: HTMLTextAreaElement = this.messageInput.nativeElement;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const value = textarea.value;
      textarea.value = value.substring(0, start) + '\n' + value.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start + 1;
      event.preventDefault();
    }
  }

  onFileSelected(event: any): void {
    this.selectedFiles = event.target.files;
  }

  addBook(){
    console.log(this.bookObj)

    const formData = new FormData();
    formData.append('classroomId', this.bookObj.ClassroomId.toString());
    formData.append('Title', this.bookObj.Title);
    formData.append('Description', this.bookObj.Description);
    
    for (let i = 0; i < this.selectedFiles.length; i++) {
      formData.append('FileDetailsList', this.selectedFiles[i], this.selectedFiles[i].name);
    }
    
    this.spinner.nativeElement.classList.remove('d-none')
    this.contentService.postBook(formData).subscribe((res)=>{
      console.log(res)
      this.activatedRoute.params.subscribe(data => {

        this.id = +data['id'];
        this.contentService.GetAllMaterial(this.id).subscribe((res)=>{
          console.log(res.body)
          this.store.dispatch(addMaterial({materialList:res.body}))
        })
  
      });
      this.spinner.nativeElement.classList.add('d-none')
      this.messageService.add({severity: 'success', summary: 'Success', detail: "Announcement posted Successfully!" });
      this.visible = false
    },error => {
      this.spinner.nativeElement.classList.add('d-none')
      this.messageService.add({severity: 'error', summary: 'Error', detail: "Error Occurred! Please try again." });
    })
  }

  addAnnouncement(){
    this.spinner.nativeElement.classList.remove('d-none')
    this.contentService.postAnnouncement(this.announcementObj).subscribe((res)=>{
      console.log(res)
      this.activatedRoute.params.subscribe(data => {

        this.id = +data['id'];
        this.contentService.GetAllMaterial(this.id).subscribe((res)=>{
          console.log(res.body)
          this.store.dispatch(addMaterial({materialList:res.body}))
        })
  
      });
      this.spinner.nativeElement.classList.add('d-none')
      this.messageService.add({severity: 'success', summary: 'Success', detail: "Announcement posted Successfully!" });
      this.visible1 = false
    },error => {
      this.spinner.nativeElement.classList.add('d-none')
      this.messageService.add({severity: 'error', summary: 'Error', detail: "Error Occurred! Please try again." });
    })
  }
    


}