import { NgClass } from '@angular/common';
import { Component, Input,inject } from '@angular/core';
import {Router, RouterModule} from "@angular/router"
import { Store } from '@ngrx/store';
import { UserService } from '../../../services/user/user.service';
import { adduser } from '../../../store/user/user.actions';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  @Input() currentPath!: string;

  userName: any;
  store = inject(Store)
  userService = inject(UserService)

  constructor(private route : Router) {
    
  }

  ngOnInit(){
    const userObj = JSON.parse(localStorage.getItem('myUser') || "{}")
    this.userService.GetUserDetails(userObj.token).subscribe((result)=>{
        this.store.dispatch(adduser({useritem: result.body}))
    })

    const token = JSON.parse(localStorage.getItem('myUser') || "{}").token
    //here we will make api call and check if that token is expired or not if not then we proceed but for now I am just checking if token is there or not
    if(token){
        this.store.select('user').subscribe(data=>{
          this.userName = data.firstName + " " + data.lastName
          if(this.userName.length > 14){
            this.userName = data.lastName
          }
        })
    }
  }

  logoutHandler() {
    localStorage.removeItem('myUser');
    this.route.navigateByUrl('/')
  }


}
