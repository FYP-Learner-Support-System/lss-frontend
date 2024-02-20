import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatInputModule,RouterModule,ReactiveFormsModule,NgIf],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit, OnDestroy{

  email = new FormControl('',Validators.compose([Validators.required,Validators.email]))
  password = new FormControl('',Validators.compose([Validators.required]))
  
  cred:any = {email:"", password:""}
  
  formgroup = new FormGroup({
    email:this.email,
    password: this.password
  })
  
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


  loginhandler(){
    this.cred = {...this.cred,email:this.email.value,password:this.password.value}
    console.log(this.cred)
  }



}
