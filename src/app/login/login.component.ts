import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

public user: any;
public message : string = '';
constructor (public _userService: LoginService, private router:Router){}
ngOnInit(){
  this.user = {
      username:'',
      password:''
    };
  }
  login(){
    this._userService.login({'username': this.user.username, 'password': this.user.password })
    this.router.navigate(['profile']);
 
    }
  

  refreshToken(){
    this._userService.refreshToken();
  }

  logout(){
    this._userService.logout();
  }

  title = 'frontend';
}


