import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';


export interface Bus {
  busId: number;
  registrationNumber: string;
  make: string;
  model: string;
  year: number;
  seatingCapacity: number;
}




@Component({
  selector: 'app-bfleet',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,],
  templateUrl: './bfleet.component.html',
  styleUrl: './bfleet.component.scss'
})
export class BfleetComponent implements AfterViewInit {
  displayedColumnsBuses: string[] = ['busId', 'registrationNumber', 'make', 'model', 'year', 'seatingCapacity'];
  busesDataSource: MatTableDataSource<Bus> = new MatTableDataSource<Bus>();

  @ViewChild(MatPaginator) busesPaginator!: MatPaginator;

  ngAfterViewInit() {
    // Sample bus fleet data
    const sampleBusData: Bus[] = [
      { busId: 1, registrationNumber: 'ABC123', make: 'Volvo', model: 'XC90', year: 2020, seatingCapacity: 30 },
      { busId: 2, registrationNumber: 'XYZ456', make: 'Mercedes-Benz', model: 'Sprinter', year: 2019, seatingCapacity: 20 },
      { busId: 3, registrationNumber: 'DEF789', make: 'Toyota', model: 'Coaster', year: 2018, seatingCapacity: 25 },
      // Add more sample bus data as needed
    ];

    // Set the data source with sample bus fleet data
    this.busesDataSource.data = sampleBusData;

    // Set the paginator for the buses data source
    if (this.busesPaginator) {
      this.busesDataSource.paginator = this.busesPaginator;
    }
  }
}