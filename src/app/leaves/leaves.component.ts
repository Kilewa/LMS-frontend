import { Component, OnInit } from '@angular/core';
import { Employee } from '../employees/employee';
import { Leave } from '../employees/leave';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {LeaveService} from '../../app/core/http/leave-service/leave.service';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit {

public employee:Employee;
public leave:any;

  constructor(public _leaveService:LeaveService,private http: HttpClient,) { }
  // constructor(private http: HttpClient,) { }
  

  ngOnInit(): void {
    this._leaveService.getEmployees()

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

   let user = JSON.parse(localStorage.getItem('auth_user'))
   this.http.get<ApiResponse>(`${environment.apiUrl}accounts/api/employee`).subscribe(data=>{
    this.employee = data
    data=data
    console.log(data)
  },
   
  error =>{
    this.employee = new Employee("profile_photo","first_name", "last_name", 0, 0, "gender", "designition", "department", "city", "county", "nationality", "country", "address", 0)
  console.log("An error occured")
  
  });

  
  this.http.get<ApiResponse>(`${environment.apiUrl}leave/leaves/api/employee/${user.user.id}`).subscribe(data=>{
    this.leave = data
    data=data
    console.log(data);
    
  },
   
  error =>{
    this.leave = new Leave(0, "start_date","end_date", "reasons","status", "comments", 0)
  console.log(error)
  
  });
  
  }
  approveLeave=(leave)=>{
    leave.status="Approved"
    leave.employee=leave.employee.user.id
    this._leaveService.approveLeave(leave)
  }
  declineLeave=(leave)=>{
    leave.status="Denied"
    leave.employee=leave.employee.user.id
    this._leaveService.declineLeave(leave)
  }

  

}
