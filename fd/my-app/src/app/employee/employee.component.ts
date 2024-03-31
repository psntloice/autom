import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

export interface Employee {
  employeeId: number;
  name: string;
  position: string;
  department: string;
  salary: number;
}



@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent  implements AfterViewInit {
  displayedColumnsEmployees: string[] = ['employeeId', 'name', 'position', 'department', 'salary'];
  employeesDataSource: MatTableDataSource<Employee> = new MatTableDataSource<Employee>();

  @ViewChild(MatPaginator) employeesPaginator!: MatPaginator;

  ngAfterViewInit() {
    // Sample employee data
    const sampleEmployeeData: Employee[] = [
      { employeeId: 1, name: 'John Doe', position: 'Software Engineer', department: 'Engineering', salary: 70000 },
      { employeeId: 2, name: 'Jane Smith', position: 'HR Manager', department: 'Human Resources', salary: 80000 },
      { employeeId: 3, name: 'Alice Johnson', position: 'Financial Analyst', department: 'Finance', salary: 75000 },
      // Add more sample employee data as needed
    ];

    // Set the data source with sample employee data
    this.employeesDataSource.data = sampleEmployeeData;

    // Set the paginator for the employees data source
    if (this.employeesPaginator) {
      this.employeesDataSource.paginator = this.employeesPaginator;
    }
  }
}

