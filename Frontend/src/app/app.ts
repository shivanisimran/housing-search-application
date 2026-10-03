import { Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './services/housing.service';

@Component({
  imports: [RouterOutlet, PropertyListComponent, NavBarComponent, HttpClientModule],
  providers: [HousingService],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-angular-app');
}
