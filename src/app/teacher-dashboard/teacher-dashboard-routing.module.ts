import { Routes } from '@angular/router';
import { TdashboardComponent } from './tdashboard/tdashboard.component';
import { ClassPageComponent } from './components/class-page/class-page.component';
import { QuizPageComponent } from './components/quiz-page/quiz-page.component';

export const routes1: Routes = [
    {path:"v1/dashboard", component:TdashboardComponent, children:[
      {path:"", component:ClassPageComponent},
      {path:"quiz", component:QuizPageComponent},
    ]}
];

