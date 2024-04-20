import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
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
  imports: [AvatarModule,NgFor,NgIf,NewlinePipe,NgxTypedJsModule,BoldPipe,UnderlinePipe,ColonPipe],
  templateUrl: './class-chat.component.html',
  styleUrl: './class-chat.component.css'
})
export class ClassChatComponent implements OnInit {

  @Input() question !: any;
  @Input() scrollToBottom:any;
  @ViewChild('typeWriter') typeWriterElement!:ElementRef;

  chatService = inject(ChatService)
  store = inject(Store)

  constructor(private route: ActivatedRoute) { }
  temp = "<h2>Assalam o alaikum</h2><p>These materials are <u>recommended</u> to be read by the studen<span class=\"ql-cursor\">﻿</span>ts. This will help in <strong>final exams.</strong></p>"

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
        this.scrollToBottom();
    }


}
