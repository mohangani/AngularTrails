import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/MockData/IEmployee';
import { IEmployee } from '../Iemployee';
import { EmployeeServiceService } from './employee-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  
  Employees : IEmployee[] = [];
  SelectedEmployee? : Employee;

  constructor(private employeeService : EmployeeServiceService) {}


  ngOnInit(): void {
    this.GetEmployeesAsync();
    this.employeeService.getData().subscribe(x=> alert(`${x} from Emp Component.`));
  }

  GetEmployeesAsync():void{
     this.employeeService.getEmployeesasync().subscribe((employesList) => {
      this.Employees = employesList;
    });
  }

  OnSelect(employee:Employee) :void{
    this.SelectedEmployee = employee;
    var a:string = <string> <any> 1;
    let b= 1;
  }
  c:number = 1;
  

}
