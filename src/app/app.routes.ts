import { Routes } from '@angular/router';
import { HomeComponent } from './home-page/home/home.component';
import { AboutComponent } from './about-page/about/about.component';
import { LoginPageComponent } from './user-auth/login/login-page/login-page.component';
import { SignupPageComponent } from './user-auth/signup/signup-page/signup-page.component';
import { StepOneComponent } from './user-auth/signup/step-one/step-one.component';
import { StepTwoComponent } from './user-auth/signup/step-two/step-two.component';
import { ContactComponent } from './contact-page/contact/contact.component';
import { NewPasswordComponent } from './user-auth/new-password/new-password.component';
import { VerifyEmailComponent } from './user-auth/verify-email/verify-email.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"about",
        component: AboutComponent
    },
    {
        path:"contact",
        component: ContactComponent
    },
    {
        path:"login",
        component: LoginPageComponent
    },
    {
        path:"signup",
        component: SignupPageComponent
    },
    {
        path:"resetpassword",
        component: StepOneComponent
    },
    // {
    //     path:"resetpassword/verification",
    //     component: VerifyEmailComponent
    // },
    {
        path:"newpassword",
        component: NewPasswordComponent
    },
    {
        path:"signup/verification",
        component: StepTwoComponent
    },
];
