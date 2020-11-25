import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment'
import { Task } from './../../../employeetasks/task';
import { NotificationService } from '../../services/notification.service';
import { NotificationType } from '../../services/notification';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private httpOptions: any;
  task: Task;
  getEmployee: any
  errors:any

  public appErrors=[]
  constructor(private http:HttpClient,private notificationService:NotificationService) {
   this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
   }

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


  public getEmployees() {


    this.http.get(`${environment.apiurl}accounts/api/employee`, this.httpOptions).subscribe(
      data => {
        this.getEmployee=data
        console.log(data)
      },
      err => {
        console.log(err)
        this.errors=true
          }
    );
  }
  public makComplete(task) {
    this.http.put(`${environment.apiurl}tasks/all-tasks/${task.id}`,task, this.httpOptions).subscribe(
      data => {
          this.notificationService.sendMessage({
            message: 'Task Completed',
            type: NotificationType.success
          });
        this.getEmployees()
      },
      err => {
        console.log(err)
         this.notificationService.sendMessage({
            message: 'Error Marking Complete',
            type: NotificationType.error
          });
       }
          
    );
  }
}
