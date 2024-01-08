import { AfterViewInit, Component, Input, NgModule, OnInit, inject } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DrawerService } from '../../../services/drawer-service.service';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { Store } from '@ngrx/store';
import { NgFor, NgIf } from '@angular/common';
import { ClassItemComponent } from "../class-item/class-item.component";


@Component({
    selector: 'app-class-page',
    standalone: true,
    templateUrl: './class-page.component.html',
    styleUrl: './class-page.component.css',
    imports: [DialogModule, AvatarModule, NgIf,NgFor, ClassItemComponent]
})
export class ClassPageComponent implements AfterViewInit, OnInit {
   constructor(private drawerService: DrawerService) {}
   store = inject(Store);
   drawer!: MatDrawer;
   disabled:boolean=true;
   value: string | undefined;
   visible: boolean = false;
   classList:object[] = [];

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
    console.log("classPage: ",this.classList)
}

    showDialog() {
        this.visible = true;
    }

}
