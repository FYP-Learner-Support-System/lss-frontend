import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, inject } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { NewlinePipe } from '../../../pipes/newline/newline.pipe';
import { ChatService } from '../../../services/chat/chat.service';
import { BoldPipe } from '../../../pipes/bold/bold.pipe';
import { UnderlinePipe } from '../../../pipes/underline/underline.pipe';
import { ColonPipe } from '../../../pipes/colon/colon.pipe';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class-chat',
  standalone: true,
  imports: [AvatarModule,NgFor,NgIf,NewlinePipe,NgxTypedJsModule,BoldPipe,UnderlinePipe,ColonPipe,NgClass],
  templateUrl: './class-chat.component.html',
  styleUrl: './class-chat.component.css'
})
export class ClassChatComponent implements OnInit {

  @Input() question !: any;
  @Input() scrollToBottom:any;
  @ViewChild('typeWriter') typeWriterElement!:ElementRef;

  @Output() booleanValueChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  chatService = inject(ChatService)
  store = inject(Store)

  constructor(private route: ActivatedRoute) { }
  booleanValue = true; // Or set to false if needed
  copiedItem = {
    copied : false,
    text:""
  }

  chat :any = [
  ];  

  startTyping = false

    chatobj = {
      request: "",
      response:"loading"
    }

    reqBody:any = {
      classroomId: 1,
      userId: 1,
      request: ""
    }

    getAllChat_reqBody:any = {
      classroomId: 1,
      userId: 1,
    }

    ngOnInit(): void {

      this.store.select('user').subscribe((result) => {
        // Subscribe to paramMap observable instead of accessing snapshot
        this.route.paramMap.subscribe(paramMap => {
          // Extract id from paramMap
          const idParam = paramMap.get('id');
          if (idParam !== null) {

            this.getAllChat_reqBody = {
              classroomId: +idParam,
              userId: result.id,
            }

            this.reqBody = {
              classroomId: +idParam,
              userId: result.id,
              request: this.question
            };

            console.log("reqObj: ", this.reqBody)
          } else {
            // Handle the case where idParam is null
            console.error("ID parameter is null");
          }

          this.chatService.getAllChats(this.getAllChat_reqBody).subscribe((res)=>{
            console.log("all chats: ", res)
            this.chat = res.body
          })

        });
      });

    }

    updateChat(){
      this.reqBody.request = this.question;
        let newChatObj = {
            request: this.question,
            response: "loading"
        };
        this.chat.push(newChatObj)
        this.chatService.getResponse(this.reqBody).subscribe(res=>{
          console.log(res)
          this.chat[this.chat.length-1].response = res.body.response
          this.startTyping = true
        },error=>{
          console.log(error)
          this.chat[this.chat.length-1].response = "Some Error Occured! Please Try Again Later..."
          this.startTyping = true
        })
        this.booleanValue = false
        this.booleanValueChange.emit(this.booleanValue);
        this.scrollToBottom();
    }

    copyResponse(html:string){
      
      this.booleanValueChange.emit(this.booleanValue);
      this.copiedItem.text = html
      const text = this.removeTags(html)
      navigator.clipboard.writeText(text).then(() => {
        this.copiedItem.copied = true
        setTimeout(() => {
          this.copiedItem.copied = false
        }, 3000);
      }, error => {
        console.log(error)
      });
    }

    removeTags(html: string): string {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      return doc.body.textContent || "";
    }

}
