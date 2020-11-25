import { Component, OnInit } from '@angular/core';
import { TaskService } from '../core/http/task-service/task.service';
import { Task } from '../employeetasks/task';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Employee } from '../employees/employee';
import {AuthServiceService} from '../core/authentication/auth.service'



@Component({
  selector: 'app-employeetasks',
  templateUrl: './employeetasks.component.html',
  styleUrls: ['./employeetasks.component.css']
})
export class EmployeetasksComponent implements OnInit {

  public task:any;
  public employee: any;
  user:any

  constructor(private taskService: TaskService,public _authService:AuthServiceService, private http: HttpClient) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('auth_user'))
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

}
}
