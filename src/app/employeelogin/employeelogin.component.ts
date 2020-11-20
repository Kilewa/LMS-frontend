import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../core/authentication/auth.service';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {

  public logindepthead:any

  constructor(public _authService:AuthServiceService) { }

  ngOnInit(): void {

  this.logindepthead={
    email:'',
    password:''
  }
    this._authService.loginErrors=[]
  }
  employeeLogin=()=>{
  	this._authService.logindepthead(this.logindepthead)
  }

}
