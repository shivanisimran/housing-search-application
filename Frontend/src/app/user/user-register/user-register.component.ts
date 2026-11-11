import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { JsonPipe, NgIf } from '@angular/common';


@Component({
  imports: [ReactiveFormsModule, JsonPipe, NgIf],
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  constructor() { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    }, this.passwordMatchValidator );
  }

  passwordMatchValidator(fg: AbstractControl): ValidationErrors | null {
     return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null : 
     { 'mismatch': true };
  }
 
  //getter methods
  get userName() {
    return this.registrationForm.get('username') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }

  onSubmit() {
     console.log(this.registrationForm);
  }

}
