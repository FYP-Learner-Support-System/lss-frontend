import { NgIf } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit,ViewChild,inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,RadioButtonModule,NgIf],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.css'
  
})
export class NewPasswordComponent implements OnInit, OnDestroy {

  @ViewChild('spinner') spinner!: ElementRef;
  authService = inject(AuthService)
  router = inject(Router)
  messageService = inject(MessageService)

  token = new FormControl('',Validators.compose([Validators.required]))
  password = new FormControl('',Validators.compose([Validators.required, Validators.minLength(8)]))
  cpassword = new FormControl('',Validators.compose([Validators.required, Validators.minLength(8)]))

  cred:any = {token:"",password:"",confirmPassword:""}

  formgroup1 = new FormGroup({
    token:this.token,
    password: this.password,
    cpassword: this.cpassword,
  },{ validators: this.passwordMatchValidator });

  newPassHandler(){
    this.spinner.nativeElement.classList.remove('d-none')
    this.cred = {token:this.token.value,password:this.password.value,confirmPassword:this.cpassword.value}
    try{
      this.authService.ResetPassword(this.cred).subscribe(res=>{
        this.messageService.add({key: 'tl', severity: 'success', summary: 'Success', detail: res?.body?.message });
        this.spinner.nativeElement.classList.add('d-none')
        this.router.navigateByUrl('/login')
      },error => {
        this.spinner.nativeElement.classList.add('d-none')
        this.messageService.add({key: 'tl', severity: 'error', summary: 'Error', detail: error?.message?.message });
      })
    }
    catch(err){
      this.spinner.nativeElement.classList.add('d-none')
      console.log("some error ocurred!!!")
    }
  }


  // Custom validator function to check if password and cpassword match
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const cpassword = control.get('cpassword');
    
    if (password && cpassword && password.value !== cpassword.value) {
      return { 'passwordMismatch': true };
    }

    return null;
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
