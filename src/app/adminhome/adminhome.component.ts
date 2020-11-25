import { Component, OnInit } from '@angular/core';
import { Task } from '../employeetasks/task';
import { Employee } from '../employees/employee';
import { Leave } from '../employees/leave';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {AuthServiceService} from '../core/authentication/auth.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  task:Task;
  employee:Employee;
  leave:Leave;
  total_staff:any;
  total_tasks:any;
  staff_on_leave:any;

  constructor(private http: HttpClient,public _authService:AuthServiceService) { }

  ngOnInit(): void {

    let user = JSON.parse(localStorage.getItem('auth_user'))

    interface ApiResponse{
      id: number, 
      name: string, 
      assigned_on : string, 
      deadline: string, 
      completed : string, 
      assigned_to : string
  }

  interface ApiResponse{
    profile_photo : any,
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
    country_of_residence : string; 
    postal_address : string; 
    basic_pay : number
  }

  interface ApiResponse{
    id: number, 
    start_date: string, 
    end_date: string, 
    reasons : string, 
    status: string, 
    comments: string, 
    employee: number
 }

  this.http.get<ApiResponse>(`${environment.apiurl}tasks/all-tasks/`).subscribe(data=>{
    this.task = data
    data=data
    this.total_tasks=Object.keys(data).length
    console.log(Object.keys(data).length)
   
  },
  error =>{
    this.task = new Task(0, "name", "assigned_on", "deadline", "completed", "assigned_to")
  console.log("An error occured")

});


this.http.get<ApiResponse>(`${environment.apiurl}accounts/api/employee`).subscribe(data=>{
  this.employee = data
  this.total_staff=Object.keys(data).length
  console.log(Object.keys(data).length)
},
 
error =>{
  this.employee = new Employee("","first_name", "last_name", 0, 0, "gender", "designition", "department", "city", "county", "nationality", "country", "address", 0)
console.log(error)

});

this.http.get<ApiResponse>(`${environment.apiurl}leave/leaves/api`).subscribe(data=>{
  this.leave = data
  data=data
  this.staff_on_leave=Object.keys(data).length
  console.log(Object.keys(data).length)
},
 
error =>{
  this.leave = new Leave(0, "start_date","end_date", "reasons","status", "comments", 0)
console.log(error)

});
this.http.get<ApiResponse>(`${environment.apiurl}leave/leaves/api`).subscribe(data=>{
  this.leave = data
  data=data
  this.staff_on_leave=Object.keys(data).length
  console.log(Object.keys(data).length)
},
 
error =>{
  this.leave = new Leave(0, "start_date","end_date", "reasons","status", "comments", 0)
console.log(error)

});

}

}
