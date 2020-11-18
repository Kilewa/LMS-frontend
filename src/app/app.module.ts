import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeinfoComponent } from './employeeinfo/employeeinfo.component';
import { UpduserdetailsComponent } from './upduserdetails/upduserdetails.component';
import { EmployeesComponent } from './employees/employees.component';
import { ManagerolesComponent } from './manageroles/manageroles.component';
import { SearchdeptComponent } from './searchdept/searchdept.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeinfoComponent,
    UpduserdetailsComponent,
    EmployeesComponent,
    ManagerolesComponent,
    SearchdeptComponent,
    AdminhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
