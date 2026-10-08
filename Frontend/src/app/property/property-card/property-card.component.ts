import { Component, Input } from '@angular/core';
import { IProperty } from '../IProperty.Interface';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports: [RouterLink, CommonModule],
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css']
})

export class PropertyCardComponent  {
   @Input() prop_list: IProperty[] = [];
} 