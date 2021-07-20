import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AppRoutingModule } from './app-routing.module';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { InterceptorsService } from './services/interceptors.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Test1Component } from './test1/test1.component';

@NgModule({
  declarations: [ // componants Added here
    AppComponent, FirstComponentComponent, EmployeesComponent, EmployeeDetailsComponent, DashBoardComponent, TechnologiesComponent, UnderConstructionComponent, AddEmployeeComponent, Test1Component
  ],
  imports: [ // Modules Added Here
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorsService,
    multi: true
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
