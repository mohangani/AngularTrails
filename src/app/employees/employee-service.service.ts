import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployesData } from 'src/MockData/EmployesData';
import { Employee } from 'src/MockData/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

getEmployeesasync() : Observable<Employee[]>{
  const employess = of(EmployesData);
  return employess;
}

getEmployee(empId:number) : Observable<Employee>{
  return of(EmployesData.find((emp)=> emp.Id == empId));
}





}
