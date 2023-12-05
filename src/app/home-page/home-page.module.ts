import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { TransformingSectionComponent } from './components/transforming-section/transforming-section.component';
import { ReadingSectionComponent } from './components/reading-section/reading-section.component';
import { SubscribeSectionComponent } from './components/subscribe-section/subscribe-section.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeroSectionComponent,
    TransformingSectionComponent,
    ReadingSectionComponent,
    SubscribeSectionComponent
  ],
  exports: [
    HeroSectionComponent,
    TransformingSectionComponent,
    ReadingSectionComponent,
    SubscribeSectionComponent
  ]
})
export class HomePageModule { }
