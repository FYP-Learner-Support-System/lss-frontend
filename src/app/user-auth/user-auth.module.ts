import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { SignupPageComponent } from './signup/signup-page/signup-page.component';
import { StepOneComponent } from './signup/step-one/step-one.component';
import { StepTwoComponent } from './signup/step-two/step-two.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginPageComponent,
    SignupPageComponent,
    StepOneComponent,
    StepTwoComponent
  ],
  exports: [
    LoginPageComponent,
    SignupPageComponent,
    StepOneComponent,
    StepTwoComponent
  ]
})
export class UserAuthModule { }
