import { Injectable } from '@angular/core';
import { from, observable, Observable, of, Subject } from 'rxjs';
import { HttprequestService } from '../services/httprequest.service';
import { IEmployee } from '../Iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  obs = new Subject<string>();
  constructor(private httpreuestservice: HttprequestService) { 

  // this.obs = of("hai");

  }

getEmployeesasync() : Observable<IEmployee[]>{
  return this.httpreuestservice.get<IEmployee[]>("emplyeeslist/");
}

getEmployee(empId:number) : Observable<IEmployee>{
  return this.httpreuestservice.get<IEmployee>("emplyeeslist/"+empId);
}

addEmployee(emp:IEmployee) : Observable<IEmployee>{
  return this.httpreuestservice.add("emplyeeslist/",emp);
}


updateEmployee(emp:IEmployee) : Observable<IEmployee>{
  return this.httpreuestservice.update("emplyeeslist/"+emp.id,emp);
}

deleteEmployee(empid:number){
  return this.httpreuestservice.delete("emplyeeslist/"+empid);
}

sendMsg(){
  this.obs.next('HAi');

}

getData():Observable<string>{
  return this.obs.asObservable();
}


}
