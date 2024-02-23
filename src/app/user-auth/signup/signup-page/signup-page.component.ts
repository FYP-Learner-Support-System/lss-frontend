import { NgIf } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AuthService } from '../../../services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,RadioButtonModule,NgIf],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent implements OnInit,OnDestroy {

  @ViewChild('spinner') spinner!: ElementRef;
  authService = inject(AuthService)
  router = inject(Router)
  messageService = inject(MessageService)

  fname = new FormControl("",Validators.required)
  lname = new FormControl("",Validators.required)
  email = new FormControl('',Validators.compose([Validators.required,Validators.email]))
  password = new FormControl('',Validators.compose([Validators.required, Validators.minLength(8)]))
  cpassword = new FormControl('',Validators.compose([Validators.required, Validators.minLength(8)]))
  tnc = new FormControl(false,Validators.requiredTrue)
  role = new FormControl("",Validators.required)

  cred:any = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: 0
  }

  formgroup1 = new FormGroup({
    fname:this.fname,
    lname:this.lname,
    email:this.email,
    password: this.password,
    cpassword: this.cpassword,
    tnc: this.tnc,
    role: this.role,
  },{ validators: this.passwordMatchValidator });

  signupHandler(){
    this.spinner.nativeElement.classList.remove('d-none')
    this.cred = {...this.cred,
      firstName:this.fname.value,
      lastName:this.lname.value,
      email:this.email.value,
      password:this.password.value,
      confirmPassword:this.cpassword.value,
      userType: parseInt(this.role.value || "0")
    }
    console.log(this.cred)
    try{
      this.authService.signup(this.cred).subscribe(res=>{
        this.messageService.add({key: 'tl', severity: 'success', summary: 'Success', detail: res.body.message });
        this.spinner.nativeElement.classList.add('d-none')
        this.router.navigateByUrl('/signup/verification')
      },error => {
        this.spinner.nativeElement.classList.add('d-none')
        this.messageService.add({key: 'tl', severity: 'error', summary: 'Error', detail: error.message });
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
