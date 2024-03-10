import { Component, OnInit, inject } from '@angular/core';
import { HeroSectionComponent } from "../components/hero-section/hero-section.component";
import { TransformingSectionComponent } from '../components/transforming-section/transforming-section.component';
import { ReadingSectionComponent } from '../components/reading-section/reading-section.component';
import { SubscribeSectionComponent } from '../components/subscribe-section/subscribe-section.component';
import { RoadmapSectionComponent } from '../components/roadmap-section/roadmap-section.component';
import { Store } from '@ngrx/store';
import { adduser } from '../../store/user/user.actions';
import { UserService } from '../../services/user/user.service';
import { SessionService } from '../../services/session/session.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeroSectionComponent,TransformingSectionComponent,ReadingSectionComponent,SubscribeSectionComponent,RoadmapSectionComponent]
})
export class HomeComponent implements OnInit{

    store = inject(Store)
    userService = inject(UserService)
    sessionService = inject(SessionService)
    messageService = inject(MessageService)

    ngOnInit(): void {
        const token = JSON.parse(localStorage.getItem('myUser') || "{}").token
        if(token){
            this.sessionService.isSessionValid(token).subscribe((res)=>{
                if(res){
                    this.userService.GetUserDetails(token).subscribe((result)=>{
                        this.store.dispatch(adduser({useritem: result.body}))
                    })
                }
                else{
                    localStorage.removeItem('myUser');
                    this.messageService.add({key: 'tl', severity: 'info', summary: 'Error', detail: "You're logged out due to inactivity! Please Log in again." });
                    location.reload();
                  }
            },error => {
                this.messageService.add({key: 'tl', severity: 'info', summary: 'Error', detail: "Server Error occured! Please log In again." });
                localStorage.removeItem('myUser');
                location.reload();
              });
        }
    }

}
