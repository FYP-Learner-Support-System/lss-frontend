import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { TeacherDashboardRoutingModule } from './teacher-dashboard-routing.module';
import { TdashboardComponent } from './tdashboard/tdashboard.component';
import { ClassPageComponent } from './components/class-page/class-page.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TdashboardComponent,
    ClassPageComponent,
  ],
  exports: [
    TdashboardComponent,
    ClassPageComponent,

  ]
})
export class TeacherDashboardModule { }
