import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty.Interface';


@Component({
  imports: [CommonModule, PropertyCardComponent],
  selector: 'app-property-list',
  styleUrl: './property-list.component.css',
  templateUrl: './property-list.component.html',
})

export class PropertyListComponent implements OnInit {
  properties: IProperty[] = [];
  constructor(private housingService: HousingService) {}

  ngOnInit(): void {
      this.housingService.getAllProperties().subscribe(
          data=>{
            this.properties = data;
            console.log(this.properties);
          },
          error=>{
            console.log(error);
          }
      );
    }
}