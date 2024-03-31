import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

export interface Supplier {
  supplierId: number;
  name: string;
  address: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
}



@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,],
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.scss'
})
export class SuppliersComponent  implements AfterViewInit {
  displayedColumnsSuppliers: string[] = ['supplierId', 'name', 'address', 'contactPerson', 'email', 'phoneNumber'];
  suppliersDataSource: MatTableDataSource<Supplier> = new MatTableDataSource<Supplier>();

  @ViewChild(MatPaginator) suppliersPaginator!: MatPaginator;

  ngAfterViewInit() {
    // Sample supplier data
    const sampleSupplierData: Supplier[] = [
      { supplierId: 1, name: 'Supplier A', address: '123 Main St, City, Country', contactPerson: 'John Doe', email: 'john.doe@example.com', phoneNumber: '+1234567890' },
      { supplierId: 2, name: 'Supplier B', address: '456 Elm St, City, Country', contactPerson: 'Jane Smith', email: 'jane.smith@example.com', phoneNumber: '+9876543210' },
      { supplierId: 3, name: 'Supplier C', address: '789 Oak St, City, Country', contactPerson: 'Alice Johnson', email: 'alice.johnson@example.com', phoneNumber: '+1357924680' },
      // Add more sample supplier data as needed
    ];

    // Set the data source with sample supplier data
    this.suppliersDataSource.data = sampleSupplierData;

    // Set the paginator for the suppliers data source
    if (this.suppliersPaginator) {
      this.suppliersDataSource.paginator = this.suppliersPaginator;
    }
  }
}

