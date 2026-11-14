import { Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import {AlertifyService} from './services/alertify.service';

@Component({
  imports: [RouterOutlet, 
            PropertyListComponent, 
            NavBarComponent, 
            AddPropertyComponent, 
            PropertyDetailComponent, 
            FormsModule, 
            ReactiveFormsModule],
  providers: [HousingService, UserService, AlertifyService],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('my-angular-app');
}
