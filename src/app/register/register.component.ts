import { Component, OnInit } from '@angular/core';

import {AuthServiceService} from '../core/authentication/auth.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public regmgr:any



  constructor(public _authService:AuthServiceService) { }

  ngOnInit(): void {
    this.regmgr = {
        first_name: '',
        last_name: '',
        role:2,
        email: '',
        address:'',
        mobile:'',
        password: ''
	
	}
    this._authService.regErrors=[]
  }

  registerManager=()=>{
    this._authService.registerUser(this.regmgr)
  }
}





