import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatInputModule,RouterModule,ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  email = new FormControl('',Validators.compose([Validators.required,Validators.email]))
  password = new FormControl('',Validators.compose([Validators.required]))

  cred:any = {email:"", password:""}

  formgroup = new FormGroup({
    email:this.email,
    password: this.password
  })

  loginhandler(){
    this.cred = {...this.cred,email:this.email.value,password:this.password.value}
    console.log(this.cred)
  }



}
