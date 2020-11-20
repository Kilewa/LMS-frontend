import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private httpOptions: any;
  allEmployees:any
  errors:boolean=false
  constructor(private http:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
  }



  public getAllemployees() {

    this.http.get(`${environment.apiUrl}accounts/api/employees`, this.httpOptions).subscribe(
      data => {
        this.allEmployees=data      
      },
      err => {
        console.log(err)
        this.errors=true
          }
    );
  }




}
