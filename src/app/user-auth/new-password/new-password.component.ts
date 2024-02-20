import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,RadioButtonModule,NgIf],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.css'
})
export class NewPasswordComponent implements OnInit, OnDestroy {

  password = new FormControl('',Validators.compose([Validators.required, Validators.minLength(8)]))
  cpassword = new FormControl('',Validators.compose([Validators.required, Validators.minLength(8)]))

  cred:any = {password:""}

  formgroup1 = new FormGroup({
    password: this.password,
    cpassword: this.cpassword,
  },{ validators: this.passwordMatchValidator });

  newPassHandler(){
    this.cred = {password:this.password.value}
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
