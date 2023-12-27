import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { TeamsSectionComponent } from './components/teams-section/teams-section.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeroSectionComponent,
    TeamsSectionComponent
  ],
  exports: [
    HeroSectionComponent,
    TeamsSectionComponent
  ]
})
export class AboutPageModule { }
