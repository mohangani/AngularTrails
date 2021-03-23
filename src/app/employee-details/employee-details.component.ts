import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/MockData/IEmployee';
import { EmployeeServiceService } from '../employees/employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input() employee?: Employee;

  constructor(private route:ActivatedRoute,private empService:EmployeeServiceService) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void{

    let empId : number = +this.route.snapshot.paramMap.get('id'); // to read Route Params

    if(empId <= 0)
      return;

      this.empService.getEmployee(empId).subscribe((emp)=> {
          this.employee = emp;
      })
  }

}
