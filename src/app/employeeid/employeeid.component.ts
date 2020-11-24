import { Component, OnInit } from '@angular/core';
import { TaskService } from '../core/http/task-service/task.service';
import { Task } from '../employeetasks/task';
import { Employee } from '../employees/employee';
import { Leave } from '../employees/leave';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

import { environment } from '../../environments/environment';


@Component({
  selector: 'app-employeeid',
  templateUrl: './employeeid.component.html',
  styleUrls: ['./employeeid.component.css']
})
export class EmployeeidComponent implements OnInit {

  task:Task;
  employee:Employee;
  leave:Leave;
  public new_leave:any;
  

  constructor(private taskService: TaskService, private http: HttpClient) { }

  ngOnInit(): void {
    interface ApiResponse{
      id: number, 
      name: string, 
      assigned_on : string, 
      deadline: string, 
      completed : string, 
      assigned_to : string
  }

  interface ApiResponse{
    profile_photo: any,
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

  this.http.get<ApiResponse>(`${environment.apiUrl}tasks/all-tasks/`).subscribe(data=>{
    this.task = data
    data=data
    console.log(data)
  },
  error =>{
    this.task = new Task(0, "name", "assigned_on", "deadline", "completed", "assigned_to")
  console.log("An error occured")

});


this.http.get<ApiResponse>(`${environment.apiUrl}accounts/api/employee`).subscribe(data=>{
  this.employee = data
  data=data
  console.log(data)
},
 
error =>{
  this.employee = new Employee("profile_photo","first_name", "last_name", 0, 0, "gender", "designition", "department", "city", "county", "nationality", "country", "address", 0)
console.log("An error occured")

});

this.http.get<ApiResponse>(`${environment.apiUrl}leaves/leave/applications/`).subscribe(data=>{
  this.leave = data
  data=data
  console.log(data)
},
 
error =>{
  this.leave = new Leave(0, "start_date","end_date", "reasons","status", "comments", 0)
console.log("An error occured")

});

}

}
