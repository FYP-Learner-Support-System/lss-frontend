import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatInputModule,RouterModule,ReactiveFormsModule,NgIf],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit, OnDestroy{

  authService = inject(AuthService)
  router = inject(Router)
  messageService = inject(MessageService)

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
    try{
      this.authService.login(this.cred).subscribe(res=>{
        this.messageService.add({key: 'tl', severity: 'success', summary: 'Success', detail: res.body.message });
        this.router.navigateByUrl('/')
      },error => {
        this.messageService.add({key: 'tl', severity: 'error', summary: 'Error', detail: error.message.message });
      })
    }
    catch(err){
      console.log("some error ocurred!!!")
    }
  }



}
