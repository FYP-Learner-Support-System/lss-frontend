import { Routes } from '@angular/router';
import { TdashboardComponent } from './tdashboard/tdashboard.component';
import { ClassPageComponent } from './components/class-page/class-page.component';
import { QuizPageComponent } from './components/quiz-page/quiz-page.component';
import { ClassContentComponent } from './components/class-content/class-content.component';

export const routes1: Routes = [
    {path:"v1/dashboard", component:TdashboardComponent, children:[
      {path:"", component:ClassPageComponent},
      {path:"quiz", component:QuizPageComponent},
      {path:"classes/:id/materials", component:ClassContentComponent},
      {path:"classes/:id/students", component:ClassContentComponent},
      {path:"classes/:id/chat", component:ClassContentComponent},
      {path:"classes/:id", redirectTo:"classes/:id/materials", pathMatch:"full"},
      {path:"classes", redirectTo:"", pathMatch:"full"},
    ]},
    {path:"v1", redirectTo:"", pathMatch:"full"},
];

