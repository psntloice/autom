import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {ThemePalette} from '@angular/material/core';
import { MatTabLabel } from '@angular/material/tabs';


export interface CommonPart {
  name: string;
  description: string;
  partNumber: string;
  manufacturer: string;
  price: number;
  availability: boolean;
}

export interface SpecificPart {
  name: string;
  description: string;
  partNumber: string;
  manufacturer: string;
  price: number;
  availability: boolean;
}




@Component({
  selector: 'app-spare-part',
  standalone: true,
  imports: [FormsModule, MatTabsModule, MatTabLabel, MatTableModule, MatPaginatorModule,],
  templateUrl: './spare-part.component.html',
  styleUrl: './spare-part.component.scss'
})
export class SparePartComponent implements AfterViewInit {
  displayedColumnsCommon: string[] = ['name', 'description', 'partNumber', 'manufacturer', 'price', 'availability'];
  displayedColumnsSpecific: string[] = ['name', 'description', 'partNumber', 'manufacturer', 'price', 'availability'];

  commonPartsDataSource: MatTableDataSource<CommonPart> = new MatTableDataSource<CommonPart>([
    { name: 'Standard Tire', description: 'All-season tire', partNumber: 'TIRE001', manufacturer: 'GoodYear', price: 100, availability: true },
    { name: 'Brake Pad Set', description: 'Ceramic brake pad set', partNumber: 'BRAKEPAD001', manufacturer: 'Brembo', price: 50, availability: false },
    // Add more common parts with additional properties as needed
  ]);

  specificPartsDataSource: MatTableDataSource<SpecificPart> = new MatTableDataSource<SpecificPart>([
    { name: 'Turbocharger', description: 'High-performance turbocharger', partNumber: 'TURBO001', manufacturer: 'Garrett', price: 500, availability: true },
    { name: 'Carbon Fiber Spoiler', description: 'Custom carbon fiber spoiler', partNumber: 'SPOILER001', manufacturer: 'APR Performance', price: 300, availability: true },
    // Add more specific parts with additional properties as needed
  ]);

  @ViewChild('commonPaginator') commonPaginator!: MatPaginator;
  @ViewChild('specificPaginator') specificPaginator!: MatPaginator;

  ngAfterViewInit() {
    // Set paginators for common and specific parts tables
    this.commonPartsDataSource.paginator = this.commonPaginator;
    this.specificPartsDataSource.paginator = this.specificPaginator;
  }
}
