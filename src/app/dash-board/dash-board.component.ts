import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { EmployeeServiceService } from '../employees/employee-service.service';
import { IEmployee } from '../Iemployee';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  employees: IEmployee[];
  selectedElement: any;
  selectedEmployeeId: number;
  windowType: number;
 @ViewChild(EmployeeDetailsComponent) empDetailsCmp : EmployeeDetailsComponent;

  constructor(private empService: EmployeeServiceService,
    private render: Renderer2,
    private router: Router,
    private empservice: EmployeeServiceService
  ) { }

  ngOnInit(): void {

    this.getEmployees();
    this.empService.getData().subscribe(x=> alert(`${x} from Dash Board Component.`));
  }


  ngAfterViewInit(){

    alert("in afterview init"+this.empDetailsCmp.print());

  }

  selectEmployee(element: any, empid: number): void {
    this.windowType=1;
    if (this.selectedElement)
      this.render.removeClass(this.selectedElement, "selecteditem")

    this.selectedElement = element.parentNode.hasAttribute("parentnode") ? element.parentNode : element;
    this.render.addClass(this.selectedElement, "selecteditem");
    this.selectedEmployeeId = empid;
    alert("in select method "+ this.empDetailsCmp.print());
  }

  getEmployees(): void {
    this.empService.getEmployeesasync().subscribe((employees) => {

      this.employees = employees;

    });
  };

  editEmployee(): void {
    this.windowType=2;
    this.empService.sendMsg();
    if (!this.selectedEmployeeId) {
      alert("Select Employee to Edit.");
      return;
    }

    this.router.navigateByUrl("/addemployee/" + this.selectedEmployeeId);
  }

  deleteEmployee(): void {
    if (!this.selectedEmployeeId) {
      alert("Select Employee to Delete.");
      return;
    }

    this.empservice.deleteEmployee(this.selectedEmployeeId).subscribe(()=> this.getEmployees());

  }

}
