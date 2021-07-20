import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HttpClientModule} from '@angular/common/http';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes =[
   //{path:'',component:DashBoardComponent},
  {path:'dashboard',component:DashBoardComponent},
{path:'employees',component:EmployeesComponent},
{path:'employeedetails/:id',component:EmployeeDetailsComponent},
{path:'underconstruction',component:UnderConstructionComponent},
{path:'addemployee',component:AddEmployeeComponent,},
{path:'addemployee/:id',component:AddEmployeeComponent},
{path:'interview', loadChildren: ()=>import('./interview/interview/interview.module').then(x=>x.InterviewModule) }

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
