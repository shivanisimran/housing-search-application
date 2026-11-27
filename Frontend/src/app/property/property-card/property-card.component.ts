import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IPropertyBase } from '../../model/ipropertybase';

@Component({
  imports: [RouterLink, CommonModule],
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css']
})

export class PropertyCardComponent  {
   @Input() prop_list: IPropertyBase[] = [];
   @Input() previewName?: string;
   @Input() previewType?: string;
   @Input() previewPrice?: number;
   @Input() previewBHK?: number;
   @Input() previewFType?: string;
   @Input() previewBuiltArea?: number;
   @Input() previewCity?: string;

   @Input() hideIcons: boolean = false;
}