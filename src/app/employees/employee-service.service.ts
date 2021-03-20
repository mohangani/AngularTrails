import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployesData } from 'src/MockData/EmployesData';
import { Employee } from 'src/MockData/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }


getEmployees() : Employee[]{
  return EmployesData;
}

getEmployeesasync() : Observable<Employee[]>{
  const employess = of(EmployesData);
  return employess;
}


}
