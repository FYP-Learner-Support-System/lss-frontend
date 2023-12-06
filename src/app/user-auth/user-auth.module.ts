import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { SignupPageComponent } from './signup/signup-page/signup-page.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginPageComponent,
    SignupPageComponent
  ],
  exports: [
    LoginPageComponent,
    SignupPageComponent
  ]
})
export class UserAuthModule { }
