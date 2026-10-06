import { Routes } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyListComponent } from './property/property-list/property-list.component';

const appRoutes : Routes = [ 
  {path: '', component: PropertyListComponent},
  {path: 'add-property', component: AddPropertyComponent}
]

export const routes: Routes = appRoutes;
