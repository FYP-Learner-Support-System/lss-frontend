import { AfterViewInit, Component, Input, NgModule, OnInit, inject } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DrawerService } from '../../../services/drawer-service.service';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { Store } from '@ngrx/store';
import { NgFor, NgIf } from '@angular/common';
import { ClassItemComponent } from "../class-item/class-item.component";
import { FormsModule } from '@angular/forms';
import { addclass } from '../../../store/classes/classes.actions';


@Component({
    selector: 'app-class-page',
    standalone: true,
    templateUrl: './class-page.component.html',
    styleUrl: './class-page.component.css',
    imports: [DialogModule, AvatarModule, NgIf,NgFor, ClassItemComponent,FormsModule]
})
export class ClassPageComponent implements AfterViewInit, OnInit {
   constructor(private drawerService: DrawerService) {}
   store = inject(Store);
   drawer!: MatDrawer;
   disabled:boolean=true;
   value: string | undefined;
   visible: boolean = false;
   visible1: boolean = false;
   classList:object[] = [];
   usertype = 0

   addClass = {name:"",desc:"",courseCode:"",content:[],instructor:{name:"",email:""},students:[]}

   joinClass = ""

  ngAfterViewInit(): void {
    setTimeout(() => {  
        const drawer = this.drawerService.getDrawer();
        this.drawer = drawer
        this.disabled = false
        // console.log("class component: ",drawer)
    }, 500);

    // Now you can use the 'drawer' reference in this component
    }

    ngOnInit(): void {
        this.store.select('classes').subscribe(data=> this.classList = data)

        this.store.select('user').subscribe(data=>{
            this.usertype = data.userType
        })

        this.usertype = JSON.parse(localStorage.getItem('myUser') || "[]").userType
        this.addClass.instructor.name = "Abdul Karim Kazi"
    }

    showDialog() {
        if(this.usertype === 0)
        {
            this.visible1 = true;
        }
        else{
            this.visible = true;
        }
    }

    submitForm(){
        console.log(this.addClass)
    }


}
