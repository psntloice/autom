import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

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

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss'
})
export class VehiclesComponent {
  displayedColumns: string[] = ['position', 'model', 'year', 'color', 'price'];
  dataSource = MERCEDES_CARS;
  clickedRows = new Set<MercedesCar>();
}
