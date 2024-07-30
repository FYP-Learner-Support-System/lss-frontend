import { Component } from '@angular/core';
import { SupportheroSectionComponent } from "../components/supporthero-section/supporthero-section.component";
import { FaqSectionComponent } from "../components/faq-section/faq-section.component";

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [SupportheroSectionComponent, FaqSectionComponent],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {

}
