import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SparePartComponent } from './spare-part/spare-part.component';


export const routes: Routes = [

    { path: '', component: HomeComponent }, // Set a default route for the root path
  { path: 'spares', component: SparePartComponent },
];
