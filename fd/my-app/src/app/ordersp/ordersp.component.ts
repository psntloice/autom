import { Component, OnInit, Input } from '@angular/core';
// Order Form Component TypeScript
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {ThemePalette} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabLabel } from '@angular/material/tabs';
import { CdkPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-ordersp',
  standalone: true,
imports: [FormsModule, MatIconModule, MatTabsModule, MatTabLabel, CdkPortal],
  templateUrl: './ordersp.component.html',
  styleUrl: './ordersp.component.scss'
})
export class OrderspComponent {

  orderSubmitted: boolean = false;
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }

  submitOrder() {
    // Handle order submission logic here (e.g., send data to backend server)
    // Upon successful submission, set orderSubmitted flag to true
    this.orderSubmitted = true;
  }
}
