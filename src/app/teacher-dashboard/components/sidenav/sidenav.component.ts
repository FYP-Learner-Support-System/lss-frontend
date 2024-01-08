import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import {RouterModule} from "@angular/router"

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
@Input() currentPath!: string;


}
