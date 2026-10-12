import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm!: NgForm;
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

}
