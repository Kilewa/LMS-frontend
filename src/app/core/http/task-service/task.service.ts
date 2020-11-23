import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment'
import { Task } from './../../../employeetasks/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  task: Task;

  constructor(private httpClient: HttpClient) { }

  taskRequest(){
    interface ApiResponse{
       id: number, 
       name: string, 
       assigned_on : string, 
       deadline: string, 
       completed : string, 
       assigned_to : string
    }
  }
}
