import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './core/http/employee-service/employee.service';

import { TaskService } from './core/http/task-service/task.service';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeinfoComponent } from './employeeinfo/employeeinfo.component';
import { UpduserdetailsComponent } from './upduserdetails/upduserdetails.component';
import { EmployeesComponent } from './employees/employees.component';
import { ManagerolesComponent } from './manageroles/manageroles.component';
import { SearchdeptComponent } from './searchdept/searchdept.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeetasksComponent } from './employeetasks/employeetasks.component';
import { DeptheadComponent } from './depthead/depthead.component';
import { DepthedloginComponent } from './depthedlogin/depthedlogin.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeeidComponent } from './employeeid/employeeid.component';
import { RegisterComponent } from './register/register.component';
import { LeavesComponent } from './leaves/leaves.component';
import { EmployeeregistrationComponent } from './employeeregistration/employeeregistration.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeinfoComponent,
    UpduserdetailsComponent,
    EmployeesComponent,
    ManagerolesComponent,
    SearchdeptComponent,
    AdminhomeComponent,
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    ContactComponent,
    EmployeetasksComponent,
    DeptheadComponent,
    RegisterComponent,
    DepthedloginComponent,
    EmployeeloginComponent,
    EmployeeidComponent,
    HeaderComponent,
    LeavesComponent,
    EmployeeregistrationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [EmployeeService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }


