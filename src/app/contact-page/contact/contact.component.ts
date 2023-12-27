import { Component } from '@angular/core';
import { ContactformComponent } from '../components/contactform/contactform.component';
import { HeroSectionComponent } from "../components/hero-section/hero-section.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    imports: [ContactformComponent, HeroSectionComponent]
})
export class ContactComponent {

}
