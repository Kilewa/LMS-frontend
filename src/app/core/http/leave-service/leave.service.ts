import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment'
import { NotificationService } from '../../services/notification.service';
import { NotificationType } from '../../services/notification';


@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private httpOptions: any;
  leave: any
  getEmployee: any
  errors:any

  

  public appErrors=[]
  constructor(private http:HttpClient,private notificationService:NotificationService) {
   this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
   }


   public ApplyLeave(leave) {
    this.http.post(`${environment.apiUrl}leave/leave/api/create`, leave, this.httpOptions).subscribe(
      data => {
         this.notificationService.sendMessage({
            message: 'Application Successful',
            type: NotificationType.success
          });
          console.log(data);
          
      },
      err => {
    
        this.appErrors=[err.error]
          this.notificationService.sendMessage({
            message: 'Error making application',
            type: NotificationType.error

          });

          console.log(err);
         
        }
        
    );
  }


  public getEmployees() {


    this.http.get(`${environment.apiUrl}accounts/api/employee`, this.httpOptions).subscribe(
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

  public approveLeave(leave) {
    this.http.put(`${environment.apiUrl}leave/leave/api/create/${leave.id}`,leave, this.httpOptions).subscribe(
      data => {
          this.notificationService.sendMessage({
            message: 'Leave Approved',
            type: NotificationType.success
          });
        this.getEmployees()
      },
      err => {
        console.log(err)
         this.notificationService.sendMessage({
            message: 'Error approving leave',
            type: NotificationType.error
          });
       }
          
    );
  }


  public declineLeave(leave) {
    this.http.put(`${environment.apiUrl}leaves/leave/applications/${leave.id}`,leave, this.httpOptions).subscribe(
      data => {
          this.notificationService.sendMessage({
            message: 'Leave Declined',
            type: NotificationType.success
          });
          this.getEmployees()
        },
        err => {
          console.log(err)
          this.notificationService.sendMessage({
            message: 'Decline failed',
            type: NotificationType.error
        });
       }
    );
  }


}

