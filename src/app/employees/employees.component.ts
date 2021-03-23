import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/MockData/IEmployee';
import { EmployeeServiceService } from './employee-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {


  Employees : Employee[] = [];
  SelectedEmployee? : Employee;

  constructor(private employeeService : EmployeeServiceService) {}


  ngOnInit(): void {
    this.GetEmployeesAsync();
  }

  GetEmployeesAsync():void{
     this.employeeService.getEmployeesasync().subscribe((employesList) => {
      this.Employees = employesList;
    });
  }

  OnSelect(employee:Employee) :void{
    this.SelectedEmployee = employee;
  }

  

}
