import { NgModule } from '@angular/core';
import { Routes, RouterModule ,CanActivate} from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { EmployeeinfoComponent } from './employeeinfo/employeeinfo.component';
import { EmployeesComponent } from './employees/employees.component';
import { ManagerolesComponent } from './manageroles/manageroles.component';
import { SearchdeptComponent } from './searchdept/searchdept.component';
import { UpduserdetailsComponent } from './upduserdetails/upduserdetails.component';
import { ContactComponent } from './contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DepthedloginComponent } from './depthedlogin/depthedlogin.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import {AuthService as AuthGuard} from './core/guards/authe.service';


const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: '/'},
  { path: '', component: LandingPageComponent},
  {path: 'departmenthead/login', component: DepthedloginComponent
  },

  {path: 'employee/login', component: EmployeeloginComponent
  },
  
  { path: 'contact', component: ContactComponent  
  },

  {
    path: 'admin', component: AdminhomeComponent
  },
  {
    path: 'search', component: SearchdeptComponent
  },

  {
    path: 'role', component: ManagerolesComponent
  },
  {
    path: 'user-detail', component: UpduserdetailsComponent
  },
  {
    path: 'employees', component: EmployeesComponent
  },
  {
    path: 'employee-info', component: EmployeeinfoComponent
  },

];
canActivate: [AuthGuard]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
