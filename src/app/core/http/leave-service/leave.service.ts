import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment'
import { Leave } from './../../../employees/leave';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  leave: Leave;

  constructor(private httpClient:HttpClient) { }

employeeRequest(){
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
}