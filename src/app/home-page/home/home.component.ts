import { Component, OnInit, inject } from '@angular/core';
import { HeroSectionComponent } from "../components/hero-section/hero-section.component";
import { TransformingSectionComponent } from '../components/transforming-section/transforming-section.component';
import { ReadingSectionComponent } from '../components/reading-section/reading-section.component';
import { SubscribeSectionComponent } from '../components/subscribe-section/subscribe-section.component';
import { RoadmapSectionComponent } from '../components/roadmap-section/roadmap-section.component';
import { Store } from '@ngrx/store';
import { adduser } from '../../store/user/user.actions';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeroSectionComponent,TransformingSectionComponent,ReadingSectionComponent,SubscribeSectionComponent,RoadmapSectionComponent]
})
export class HomeComponent implements OnInit{

    store = inject(Store)

    ngOnInit(): void {
        console.log("home called")
        const userObj = JSON.parse(localStorage.getItem('myUser') || "{}")
        this.store.dispatch(adduser({useritem: userObj}))

        this.store.select("user").subscribe(data=>{
            console.log("user State: ",data)
        })
    }

}
