import { Component, OnInit } from '@angular/core';
import { TaskService } from '../core/http/task-service/task.service';
import { Task } from '../employeetasks/task';
import { Employee } from '../employees/employee';
import { Leave } from '../employees/leave';
import { LeaveService } from '../core/http/leave-service/leave.service';
import { HttpClient } from '@angular/common/http';
import {AuthServiceService} from '../core/authentication/auth.service'
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-employeeid',
  templateUrl: './employeeid.component.html',
  styleUrls: ['./employeeid.component.css']
})
export class EmployeeidComponent implements OnInit {

  public errors: any = [];
  public task: any;
  public employee: any;
  public leave: any;
  public new_leave:any;
  public applyLeave:any
  public user: any;

  constructor(public _authService:AuthServiceService,public _leaveService:LeaveService ,public _TaskService:TaskService ,private taskService: TaskService, private http: HttpClient) { }

  ngOnInit(): void {
    this._TaskService.getEmployees()
    this.user = JSON.parse(localStorage.getItem('auth_user'))
    
    

      this.http.get<ApiResponse>(`${environment.apiUrl}accounts/api/employee/${this.user.user.id}`).subscribe(data=>{
        this.employee = data
        data=data
        console.log(data)
      },
 
      error =>{
        this.employee = new Employee("profile_photo","first_name", "last_name", 0, 0, "gender", "designition", "department", "city", "county", "nationality", "country", "address", 0)
      console.log(error)

      });

      this.http.get<ApiResponse>(`${environment.apiUrl}tasks/all-tasks/`).subscribe(data=>{
        this.task = data
        data=data
    
      },
      error =>{
        this.task = new Task(0, "name", "assigned_on", "deadline", "completed", "assigned_to")
      console.log("An error occured")
    
    });
    
    

      this.http.get<ApiResponse>(`${environment.apiUrl}leave/leaves/api/employee/${this.user.user.id}`).subscribe(data=>{
        this.leave = data
        data=data
       
        
      },
      
      error =>{
        this.leave = new Leave(0,"start_date","end_date", "reasons","status", "comments", 0)
          

      });


      this.http.get<ApiResponse>(`${environment.apiUrl}leave/leaves/api`).subscribe(data=>{
        this.leave = data
        data=data
       
        
      },
      
      error =>{
        this.leave = new Leave(0,"start_date","end_date", "reasons","status", "comments", 0)
          console.log(error)

      });

      this.applyLeave = {
        Employee:this.user.user.id,
        start_date: '',
        end_date: '',
        reasons: '',
        status:'Pending',
        comments:'',
      }
      this._leaveService.errors=[]


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

  
}

leaveApplication=()=>{
  this._leaveService.ApplyLeave(this.applyLeave)
  console.log(this.applyLeave);


  this.http.get(`${environment.apiUrl}leave/leaves/api/employee/${this.user.user.id}`).subscribe(data=>{
    this.leave = data
    data=data
   
    
  },
  
  error =>{
    this.leave = new Leave(0,"start_date","end_date", "reasons","status", "comments", 0)
      

  });
  
}



makComplete=(task)=>{
  task.status="Complete"
  task.employee=task.employee.user.id
  this._TaskService.makComplete(task)

  this.http.get(`${environment.apiUrl}tasks/all-tasks/`).subscribe(data=>{
    this.task = data
    data=data

  },
  error =>{
    this.task = new Task(0, "name", "assigned_on", "deadline", "completed", "assigned_to")
  console.log("An error occured")

});

}






}

