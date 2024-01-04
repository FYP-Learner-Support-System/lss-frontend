import { Component } from '@angular/core';
import { TopnavComponent } from "../topnav/topnav.component";

@Component({
    selector: 'app-class-page',
    standalone: true,
    templateUrl: './class-page.component.html',
    styleUrl: './class-page.component.css',
    imports: [TopnavComponent]
})
export class ClassPageComponent {

}
