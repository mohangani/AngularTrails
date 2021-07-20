import { Component, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../employees/employee-service.service';
import { IEmployee } from '../Iemployee';
import { HttprequestService } from '../services/httprequest.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  // @Input() employee?: IEmployee;
@Input() empId:number;
@Input() set id(empId:number){
    this.empId = empId;
 this.getEmployee(this.empId);
}
@Output() needToRefresh;
  


  employee:IEmployee;

  constructor(private route:ActivatedRoute,
    private empService:EmployeeServiceService, 
    private _activatedRoute:ActivatedRoute,
    private httpreuestservice: HttprequestService) { 

  }

  ngOnInit(): void {
    // this._activatedRoute.paramMap.subscribe(params => {
    //   this.getEmployee(+params.get('id'));
    // });
    if(this.empId)
      this.getEmployee(this.empId);
    this.empService.getData().subscribe(x=> alert(`${x} from Emp Details Component.`));
  }

  ngOnChanges(Changes){
     if(Changes.empId.previousValue != Changes.empId.currentValue)
       this.getEmployee(this.empId);
  }

  print(){

    return "Aha";
  }

  getEmployee(empId:number): void{

    //let empId : number = +this.route.snapshot.paramMap.get('id'); // to read Route Params

    if(empId <= 0)
      return;

      this.empService.getEmployee(empId).subscribe((emp)=> {
          this.employee = emp;
      })
  }

}
