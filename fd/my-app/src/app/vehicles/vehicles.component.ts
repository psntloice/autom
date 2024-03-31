import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider';

export interface MercedesCar {
  position: number;
  model: string;
  year: number;
  color: string;
  price: number;
}

const MERCEDES_CARS: MercedesCar[] = [
  { position: 1, model: 'C-Class', year: 2022, color: 'Black', price: 45000 },
  { position: 2, model: 'E-Class', year: 2021, color: 'Silver', price: 55000 },
  { position: 3, model: 'S-Class', year: 2023, color: 'White', price: 85000 },
  { position: 4, model: 'GLA', year: 2020, color: 'Blue', price: 38000 },
  { position: 5, model: 'GLC', year: 2022, color: 'Red', price: 50000 },
  { position: 6, model: 'GLE', year: 2021, color: 'Gray', price: 60000 },
  { position: 7, model: 'GLS', year: 2023, color: 'Green', price: 90000 },
  { position: 8, model: 'AMG GT', year: 2020, color: 'Black', price: 120000 },
  { position: 9, model: 'CLA', year: 2022, color: 'White', price: 40000 },
  { position: 10, model: 'CLS', year: 2021, color: 'Silver', price: 70000 },

];
export interface ToyotaCar {
  position: number;
  model: string;
  year: number;
  color: string;
  price: number;
}

export const TOYOTA_CARS: ToyotaCar[] = [
  { position: 1, model: 'Corolla', year: 2022, color: 'Black', price: 25000 },
  { position: 2, model: 'Camry', year: 2021, color: 'Silver', price: 30000 },
  { position: 3, model: 'RAV4', year: 2023, color: 'White', price: 35000 },
  { position: 4, model: 'Highlander', year: 2020, color: 'Blue', price: 40000 },
  { position: 5, model: 'Prius', year: 2022, color: 'Red', price: 28000 },
  { position: 6, model: 'Sienna', year: 2021, color: 'Gray', price: 35000 },
  { position: 7, model: 'Tacoma', year: 2023, color: 'Green', price: 32000 },
  { position: 8, model: 'Tundra', year: 2020, color: 'Black', price: 40000 },
  { position: 9, model: 'Corolla Cross', year: 2022, color: 'White', price: 27000 },
  { position: 10, model: 'Land Cruiser', year: 2021, color: 'Silver', price: 80000 },
];

export interface Brand {
  brand: string;
  numModels: number;
  marketSegment: string;
  salesPerformance: string;
  brandValue: string;
  innovationTech: string;
  globalPresence: string;
  customerSatisfaction: string;
  brandHistory: string;
}
export const BRAND_DATA: Brand[] = [
  { brand: 'Mercedes', numModels: 25, marketSegment: 'Luxury', salesPerformance: 'High', brandValue: 'High', innovationTech: 'Advanced', globalPresence: 'Global', customerSatisfaction: 'High', brandHistory: 'Established' },
  { brand: 'Toyota', numModels: 30, marketSegment: 'Mid-range', salesPerformance: 'Very High', brandValue: 'High', innovationTech: 'Innovative', globalPresence: 'Global', customerSatisfaction: 'High', brandHistory: 'Long-standing' },
  { brand: 'Suzuki', numModels: 20, marketSegment: 'Economy', salesPerformance: 'Moderate', brandValue: 'Moderate', innovationTech: 'Progressive', globalPresence: 'Regional', customerSatisfaction: 'Moderate', brandHistory: 'Established' }
];


@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatDividerModule],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss'
})
export class VehiclesComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'model', 'year', 'color', 'price'];
  // dataSource = new MatTableDataSource<MercedesCar>(MERCEDES_CARS);
  carsDataSource: MatTableDataSource<any> = new MatTableDataSource<MercedesCar>(MERCEDES_CARS);
  selectedCarType: string = 'mercedes';
  selectedBrand: string = 'Mercedes';
  // carsDataSource = new MatTableDataSource<MercedesCar>(MERCEDES_CARS);
  brandsDataSource = BRAND_DATA;
  displayedColumns1: string[] = ['brand', 'numModels', 'marketSegment', 'salesPerformance', 'brandValue', 'innovationTech', 'globalPresence', 'customerSatisfaction', 'brandHistory'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

    // Method to switch between car types and update the data source
    switchCarType(carType: string) {
      this.selectedCarType = carType;
  
      // Update the data source based on the selected car type
      switch (carType) {
        case 'mercedes':
          this.carsDataSource = new MatTableDataSource<MercedesCar>(MERCEDES_CARS);
          this.selectedBrand = 'Mercedes';
          break;
        case 'toyota':
          this.carsDataSource = new MatTableDataSource<ToyotaCar>(TOYOTA_CARS);
          this.selectedBrand = 'Toyota';

          break;
        // case 'suzuki':
        //   this.carsDataSource = new MatTableDataSource<SuzukiCar>(SUZUKI_CARS);
        // this.selectedBrand = 'Mercedes';

        //   break;
        default:
          // Handle default case or error
          break;
      }
  
      // Set the paginator for the new data source
      if (this.paginator) {
        this.carsDataSource.paginator = this.paginator;
      }
    }

    ngAfterViewInit() {
      // Set the paginator for the initial data source
      if (this.paginator) {
        this.carsDataSource.paginator = this.paginator;
      }
    }
  clickedRows = new Set<MercedesCar>();
}



// {
//   displayedColumns: string[] = ['position', 'model', 'year', 'color', 'price'];
//   dataSource = MERCEDES_CARS;
//   clickedRows = new Set<MercedesCar>();
// }
