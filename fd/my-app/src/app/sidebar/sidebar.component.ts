import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, /* Other modules */],
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
