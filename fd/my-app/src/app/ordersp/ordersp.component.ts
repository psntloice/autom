import { Component } from '@angular/core';
// Order Form Component TypeScript
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-ordersp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ordersp.component.html',
  styleUrl: './ordersp.component.scss'
})
export class OrderspComponent {

  orderSubmitted: boolean = false;

  submitOrder() {
    // Handle order submission logic here (e.g., send data to backend server)
    // Upon successful submission, set orderSubmitted flag to true
    this.orderSubmitted = true;
  }
}
