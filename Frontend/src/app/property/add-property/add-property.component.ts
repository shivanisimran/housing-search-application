import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {CommonModule} from '@angular/common';
import { TabsetComponent, TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { IProperty } from '../IProperty.Interface';



@Component({
  imports: [FormsModule, CommonModule, TabsModule, ButtonsModule, BsDatepickerModule, PropertyCardComponent],
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})

export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm!: NgForm;
  @ViewChild('formTabs') formTabs?: TabsetComponent;


  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];

  propertyView: IProperty = {
    Id: 0,
    SellRent: 1,
    Name: '',
    Type: ''
  };

  constructor(private router: Router) { }
  

  ngOnInit() {
  }

  onBack(){
     this.router.navigate(['/']);
  }

  onSubmit(){
    console.log("Form Submitted");
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }

}
