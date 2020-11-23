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
import { AuthService as AuthGuard}  from './core/guards/authe.service';
import { EmployeetasksComponent } from './employeetasks/employeetasks.component';
import { EmployeeidComponent } from './employeeid/employeeid.component';
import { RegisterComponent } from './register/register.component';
import { LeavesComponent } from './leaves/leaves.component';
import { EmployeeregistrationComponent } from './employeeregistration/employeeregistration.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'departmenthead/login', component: DepthedloginComponent
  },

  { path: 'employee/login', component: EmployeeloginComponent
  },
  
  { path: 'contact', component: ContactComponent  
  },

  { path: 'leaves', component: LeavesComponent  
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
    path: 'reisteremployee', component: EmployeeregistrationComponent
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
  {
    path: 'employee-tasks', component: EmployeetasksComponent
  },

  { path: 'employee-id', component: EmployeeidComponent },

  {
    path: 'manager-registration', component: RegisterComponent
  },

  
  { path: '**', redirectTo: '/'},

];
canActivate: [AuthGuard]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
