import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {NgIf} from '@angular/common';
import { AuthService } from '../services/auth.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertifyService } from '../services/alertify.service';


@Component({
  imports: [RouterLink, RouterLinkActive, NgIf, BsDropdownModule],
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  loggedinUser = '';
  constructor(private alertify: AlertifyService) { }

  ngOnInit() {
  }

  loggedIn() {
    // return this.authService.currentUser();
    this.loggedinUser = localStorage.getItem('token') || '';
    return this.loggedinUser !== null && this.loggedinUser !== '';
  }

  onLogout() {
    localStorage.removeItem('token');
    this.alertify.success('Logout successful');
  }

}
