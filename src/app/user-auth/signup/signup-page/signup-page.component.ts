import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,RadioButtonModule,NgIf],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent implements OnInit,OnDestroy {

  email = new FormControl('',Validators.compose([Validators.required,Validators.email]))
  password = new FormControl('',Validators.compose([Validators.required, Validators.minLength(8)]))
  cpassword = new FormControl('',Validators.compose([Validators.required, Validators.minLength(8)]))
  tnc = new FormControl(false,Validators.requiredTrue)
  role = new FormControl("",Validators.required)

  cred:any = {email:"", password:"",cpassword:""}

  formgroup1 = new FormGroup({
    email:this.email,
    password: this.password,
    cpassword: this.cpassword,
    tnc: this.tnc,
    role: this.role,
  },{ validators: this.passwordMatchValidator });

  signupHandler(){
    this.cred = {...this.cred,email:this.email.value,password:this.password.value,cpassword:this.cpassword.value,role: this.role.value}
    console.log(this.cred)
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
