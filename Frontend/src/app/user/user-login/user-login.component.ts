import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertifyService } from '../../services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  imports: [FormsModule],
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm){
    console.log(loginForm.value);

    const token = this.authService.authUser(loginForm.value);

    if(token && typeof token['userName'] === 'string'){
      this.authService.setToken(token['userName']);
      this.alertify.success('Login successful');
      this.router.navigate(['/']);
    }else{
      this.alertify.error('User ID or Password is incorrect');
    }
  }

}
