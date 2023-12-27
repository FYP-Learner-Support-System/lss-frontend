import { Component } from '@angular/core';
import { HeroSectionComponent } from "../components/hero-section/hero-section.component";
import { TeamsSectionComponent } from "../components/teams-section/teams-section.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [HeroSectionComponent, TeamsSectionComponent]
})
export class AboutComponent {

}
