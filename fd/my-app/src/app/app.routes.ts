import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SparePartComponent } from './spare-part/spare-part.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { OrderspComponent } from './ordersp/ordersp.component';
import { SalesComponent } from './sales/sales.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BfleetComponent } from './bfleet/bfleet.component';
import { OservicesComponent } from './oservices/oservices.component';
import { AfComponent } from './af/af.component';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [

    { path: '', component: HomeComponent }, // Set a default route for the root path
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'spares', component: SparePartComponent },
  { path: 'orders', component: OrderspComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'suppliers', component: SuppliersComponent },
  { path: 'fleet', component: BfleetComponent },
  { path: 'others', component: OservicesComponent },
  { path: 'af', component: AfComponent },
  { path: 'employee', component: EmployeeComponent },

];
