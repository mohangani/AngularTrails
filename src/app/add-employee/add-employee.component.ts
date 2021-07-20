import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../employees/employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @Output() needToRefresh = new EventEmitter();
  @Input() empId: number;
  

  employee: any = {};
  showValidation: boolean = false;

  constructor(private employeeService: EmployeeServiceService,
    private _activatedRoute: ActivatedRoute,
    private empservice: EmployeeServiceService

  ) {

  }

  ngOnInit(): void {
    // this._activatedRoute.paramMap.subscribe(params => {
    //   this.getEmployeeDetails(+params.get('id'));
    // });
    if(this.empId)
    this.getEmployeeDetails(this.empId);
  }

ngOnChanges(changes){
     this.getEmployeeDetails(changes.empId.currentValue);
}

  saveEmployee(): void {

    if (!this.employee.name || !this.employee.age || !this.employee.gender) {
      this.showValidation = true;
      return;
    }

    if (this.employee.id && this.employee.id > 0) {
      this.updateEmployee(); 
      return;
    }

    this.addEmployee();

  }

  getEmployeeDetails(empid: number): void {
    if(empid <= 0) return;
    this.empservice.getEmployee(empid).subscribe(res => this.employee = res);
  }

  addEmployee() {
    this.employeeService.addEmployee(this.employee).subscribe((res) =>{
      this.needToRefresh.emit('');
      this.employee = {}
    });
  }

  updateEmployee() {
    this.empservice.updateEmployee(this.employee).subscribe(res => {
      this.employee = {};
      alert("Updated");
      this.needToRefresh.emit('');
    });
  }

}

