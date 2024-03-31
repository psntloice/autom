import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

export interface Sale {
  saleId: number;
  date: string;
  product: string;
  quantity: number;
  price: number;
}



@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent implements AfterViewInit {
  displayedColumnsSales: string[] = ['saleId', 'date', 'product', 'quantity', 'price', 'total'];
  salesDataSource: MatTableDataSource<Sale> = new MatTableDataSource<Sale>();

  @ViewChild(MatPaginator) salesPaginator!: MatPaginator;

  ngAfterViewInit() {
    // Sample sales data
    const sampleSalesData: Sale[] = [
      { saleId: 1, date: '2024-04-01', product: 'Car Model A', quantity: 2, price: 50000 },
      { saleId: 2, date: '2024-04-02', product: 'Car Model B', quantity: 1, price: 60000 },
      { saleId: 3, date: '2024-04-03', product: 'Car Model C', quantity: 3, price: 70000 },
      // Add more sample sales data as needed
    ];

    // Set the data source with sample sales data
    this.salesDataSource.data = sampleSalesData;

    // Set the paginator for the sales data source
    if (this.salesPaginator) {
      this.salesDataSource.paginator = this.salesPaginator;
    }
  }
}
