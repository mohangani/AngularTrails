import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DashBoardComponent } from './dash-board/dash-board.component';


const routes =[
  {path:'',component:DashBoardComponent},
  {path:'dashboard',component:DashBoardComponent},
{path:'employees',component:EmployeesComponent},
{path:'employeedetails/:id',component:EmployeeDetailsComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
