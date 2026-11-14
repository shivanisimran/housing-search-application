import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { JsonPipe, NgIf } from '@angular/common';
import { UserService } from '../../services/user.service';
import { AlertifyService } from '../../services/alertify.service';
import { User } from '../../model/user';


@Component({
  imports: [ReactiveFormsModule, JsonPipe, NgIf],
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  user: User = {
    username: '',
    email: '',
    password: '',
    mobile: ''
  };

  userSubmitted: boolean = false;
  constructor(private fb : FormBuilder, 
    private userService: UserService,
    private alertifyService: AlertifyService) { }

  ngOnInit() {
    // this.registrationForm = new FormGroup({
    //   username: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    // }, this.passwordMatchValidator );

    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]
    }, { validators: this.passwordMatchValidator });
  }
  passwordMatchValidator(fg: AbstractControl): ValidationErrors | null {
     return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null : 
     { 'mismatch': true };
  }


  userData(): User {
    return this.user = {
      username: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
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
    this.userSubmitted = true;
    if(this.registrationForm.valid) {
      //this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.alertifyService.success('Congrats, you are successfully registered');
    }else{
      this.alertifyService.error('Kindly provide the required fields');
    }
  }
}
