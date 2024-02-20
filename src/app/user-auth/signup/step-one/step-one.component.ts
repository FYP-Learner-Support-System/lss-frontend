import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit,inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-step-one',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,RadioButtonModule,NgIf],
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.css'
})
export class StepOneComponent {


  authService = inject(AuthService)
  router = inject(Router)
  messageService = inject(MessageService)

  email = new FormControl('',Validators.compose([Validators.required,Validators.email]))

  formgroup1 = new FormGroup({
    email:this.email,
  });

  emailHandler(){
    console.log(this.email.value)
    try{
      this.authService.SendTokentoResetPassword(this.email.value).subscribe(res=>{
        this.messageService.add({key: 'tl', severity: 'success', summary: 'Success', detail: res?.body?.message });
        this.router.navigateByUrl('/newpassword')
      },error => {
        this.messageService.add({key: 'tl', severity: 'error', summary: 'Error', detail: error?.message?.message });
      })
    }
    catch(err){
      console.log("some error ocurred!!!")
    }
  }

  // Declare increment as a property of the component class
  textNumb = 1;
  private increment: any;

  ngOnInit(): void {
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
