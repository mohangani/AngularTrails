import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/MockData/IEmployee';
import { EmployeeServiceService } from './employee-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {


  Employees : Employee[] = [];
  //  Employees? : Observable<Employee[]>;
  SelectedEmployee? : Employee;

  constructor(private employeeService : EmployeeServiceService) {}


  ngOnInit(): void {
    this.GetEmployees();
  }

  GetEmployees():void{
    this.Employees = this.employeeService.getEmployees();

  }

  GetEmployeesAsync():void{
     this.employeeService.getEmployeesasync().subscribe(function(employesList){
      this.Employees = employesList;
    });

    //this.Employees = this.employeeService.getEmployeesasync();
    
   }

  OnSelect(employee:Employee) :void{
    this.SelectedEmployee = employee;
  }

  

}
