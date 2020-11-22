import { Component, OnInit } from '@angular/core';
import { TaskService } from '../core/http/task-service/task.service';
import { Task } from '../employeetasks/task';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-employeetasks',
  templateUrl: './employeetasks.component.html',
  styleUrls: ['./employeetasks.component.css']
})
export class EmployeetasksComponent implements OnInit {

  task:Task;

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

    this.http.get<ApiResponse>(`${environment.apiUrl}tasks/all-tasks/`).subscribe(data=>{
      this.task = data
      data=data
      console.log(data)
    },
    error =>{
      this.task = new Task(0, "name", "assigned_on", "deadline", "completed", "assigned_to")
    console.log("An error occured")

  });
}
}
