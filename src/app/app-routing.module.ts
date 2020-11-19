import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminhomeComponent } from './adminhome/adminhome.component';
import { EmployeeinfoComponent } from './employeeinfo/employeeinfo.component';
import { EmployeesComponent } from './employees/employees.component';
import { ManagerolesComponent } from './manageroles/manageroles.component';
import { SearchdeptComponent } from './searchdept/searchdept.component';
import { UpduserdetailsComponent } from './upduserdetails/upduserdetails.component';
import { ContactComponent } from './contact/contact.component';
// import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { EmployeetasksComponent } from './employeetasks/employeetasks.component'


const routes: Routes = [
  {
    path: '', component: AdminhomeComponent
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

  // { 
  //   // path: '', component: LandingPageComponent
  // },
  { 
  path: 'contact', component: ContactComponent
  },
  { 
  path: 'login', component: LoginComponent
  },
  { 
    path: 'tasks', component: EmployeetasksComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
