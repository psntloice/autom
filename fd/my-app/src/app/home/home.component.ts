import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ SidebarComponent, MatCardModule],
    templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 
  title = 'Welcome to My Automobile App!';

}
