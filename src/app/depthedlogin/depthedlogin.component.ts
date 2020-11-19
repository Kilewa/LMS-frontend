import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../core/authentication/auth.service'

@Component({
  selector: 'app-depthedlogin',
  templateUrl: './depthedlogin.component.html',
  styleUrls: ['./depthedlogin.component.css']
})
export class DepthedloginComponent implements OnInit {

  public logindepthead:any

  constructor(public _authService:AuthServiceService) { }

  ngOnInit(): void {

  this.logindepthead={
    email:'',
    password:''
  }
    this._authService.loginErrors=[]
  }
  deptheadLogin=()=>{
  	this._authService.logindepthead(this.logindepthead)
  }

}
