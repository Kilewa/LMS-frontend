import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment'
import { Employee } from './../../../employees/employee';
import { resolve } from 'dns';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee: Employee;

  constructor(private httpClient:HttpClient) {

  }
employeeRequest(){
  interface ApiResponse{
    first_name:string;
    last_name: string;
    phone_number: number;
    employee_number: number;
    gender : string;
    designition : string; 
    department : string; 
    city : string; 
    county : string; 
    nationality : string; 
    country : string; 
    postal_address : string; 
    basic_pay: number;
  }
}
}

