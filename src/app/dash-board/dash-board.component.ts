import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/MockData/IEmployee';
import { EmployeeServiceService } from '../employees/employee-service.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  employees: Employee[];

  constructor(private empService:EmployeeServiceService) { }

  ngOnInit(): void {

    this.getEmployees();
  }

  getEmployees():void{
    this.empService.getEmployeesasync().subscribe((employees) => {

      this.employees = employees;

    })

  }
  

}
