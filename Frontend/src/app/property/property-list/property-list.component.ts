import { Component, OnInit, signal } from '@angular/core';
import {CommonModule} from '@angular/common';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty.Interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  imports: [CommonModule, PropertyCardComponent],
  selector: 'app-property-list',
  styleUrl: './property-list.component.css',
  templateUrl: './property-list.component.html',
})

export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties = signal<IProperty[]>([]);
  constructor(private route: ActivatedRoute, private housingService: HousingService) {}

  ngOnInit(): void {
      if(this.route.snapshot.url.toString()) {
        this.SellRent = 2;
      }
      this.housingService.getAllProperties(this.SellRent).subscribe(
          data=>{
            this.properties.set(data);
            console.log(data);
            
          },
          error=>{
            console.log(error);
          }
      );
    }
}