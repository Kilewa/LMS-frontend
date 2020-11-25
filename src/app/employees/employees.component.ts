import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../core/http/employee-service/employee.service';
import { Employee } from '../employees/employee';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employee:Employee;
  
  constructor(private employeeService: EmployeeService, private http:HttpClient) { }
  ngOnInit(): void {
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

    

    this.http.get<ApiResponse>(`${environment.apiurl}accounts/api/employee`).subscribe(data=>{
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
    
  


