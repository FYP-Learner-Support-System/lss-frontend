import {NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ZeroPrefixPipe } from '../../../pipes/zeroPrefix/zero-prefix.pipe';
import { AuthService } from '../../../services/auth/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-step-two',
  standalone: true,
  imports: [NgFor,RouterModule,ReactiveFormsModule,ZeroPrefixPipe,NgIf],
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.css'
})
export class StepTwoComponent implements OnInit,OnDestroy {

  @ViewChild('spinner') spinner!: ElementRef;
  authService = inject(AuthService)
  router = inject(Router)
  messageService = inject(MessageService)

  code = new FormControl('',Validators.compose([Validators.required]))
  mint:number = 1;
  sec = 59;
  disableResendBtn = true

  formgroup1 = new FormGroup({
    code:this.code,
  });

  verifyHandler(){
    this.spinner.nativeElement.classList.remove('d-none')
    console.log("token: ",this.code.value)
    try{
      this.authService.verifyUser(this.code.value).subscribe(res=>{
        console.log("res: ",res)
        this.messageService.add({key: 'tl', severity: 'success', summary: 'Success', detail: res?.body?.message });
        this.spinner.nativeElement.classList.add('d-none')
        this.router.navigateByUrl('/login')
      },error => {
        this.spinner.nativeElement.classList.add('d-none')
        this.messageService.add({key: 'tl', severity: 'error', summary: 'Error', detail: error?.message?.message });
        console.error(error.message.message);
      })
    }
    catch(err){
      this.spinner.nativeElement.classList.add('d-none')
      console.log("some error ocurred!!!")
    }
  }

  timerLogic(){
    const timer = setInterval(() => {
      this.sec = this.sec - 1;
      if (this.sec === 0) {
        if (this.mint === 0) {
          this.disableResendBtn = false
          clearInterval(timer); // Stop the interval when both minutes and seconds reach zero
          return;
        }
        this.mint = this.mint - 1;
        this.sec = 60;
      }
    }, 1000);
  }

  resendHandler(){

    //call api to send verification code here

    this.mint = 1
    this.sec = 59
    this.timerLogic()
    this.disableResendBtn = true
  }

  // Declare increment as a property of the component class
  textNumb = 1;
  private increment: any;

  ngOnInit(): void {

    this.timerLogic();

    // Assign setInterval to the increment property
    this.increment = setInterval(() => {
      if (this.textNumb === 3) {
        this.textNumb = 0;
      }
      this.textNumb++;
    }, 3000);
  }

  ngOnDestroy(): void {
      // Clear the interval using the property declared in the class
      clearInterval(this.increment);
  }


}
