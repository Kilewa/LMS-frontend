import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './core/http/employee-service/employee.service';

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
    DepthedloginComponent,
    EmployeeloginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }


