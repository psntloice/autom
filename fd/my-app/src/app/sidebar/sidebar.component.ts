import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatListModule, /* Other modules */],
    templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {
 
  menuItems = [
    { link: '/dashboard', label: 'Dashboard' },
    { link: '/cars', label: 'Cars' },
    { link: '/spare-parts', label: 'Spare Parts' },
    // Add more menu items as needed
  ];
}
// export class SidebarComponent {
//   isCollapsed: boolean = false;

//   toggleSidebar() {
//     this.isCollapsed = !this.isCollapsed;
//   }
 
// }

