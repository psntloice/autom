import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {ThemePalette} from '@angular/material/core';
import { MatTabLabel } from '@angular/material/tabs';

export interface InventoryItem {
  itemId: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [FormsModule, MatTabsModule, MatTabLabel, MatTableModule, MatPaginatorModule,],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent implements AfterViewInit {
  displayedColumnsInventory: string[] = ['itemId', 'name', 'description', 'quantity', 'price'];
  inventoryDataSource: MatTableDataSource<InventoryItem> = new MatTableDataSource<InventoryItem>();

  @ViewChild(MatPaginator) inventoryPaginator!: MatPaginator;

  ngAfterViewInit() {
    // Sample inventory data
    const sampleInventoryData: InventoryItem[] = [
      { itemId: 1, name: 'Engine Oil', description: 'Synthetic engine oil', quantity: 20, price: 50 },
      { itemId: 2, name: 'Brake Pads', description: 'OEM brake pads', quantity: 15, price: 70 },
      { itemId: 3, name: 'Air Filter', description: 'High-flow air filter', quantity: 30, price: 40 },
      // Add more sample inventory items as needed
    ];

    // Set the data source with sample inventory data
    this.inventoryDataSource.data = sampleInventoryData;

    // Set the paginator for the inventory data source
    if (this.inventoryPaginator) {
      this.inventoryDataSource.paginator = this.inventoryPaginator;
    }
  }
}
