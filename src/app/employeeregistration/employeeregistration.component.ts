import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../core/authentication/auth.service'

@Component({
  selector: 'app-employeeregistration',
  templateUrl: './employeeregistration.component.html',
  styleUrls: ['./employeeregistration.component.css']
})
export class EmployeeregistrationComponent implements OnInit {

  public regemp:any

  constructor(public _authService:AuthServiceService) { }

  ngOnInit(): void {
    this.regemp = {
        first_name: '',
        last_name: '',
        role:3,
        email: '',
        address:'',
        mobile:'',
        password: ''
	
	}
    this._authService.regErrors=[]
  }

  registerEmp=()=>{
    this._authService.registerUser(this.regemp)
  }
}

