import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../Iemployee';

@Injectable({
  providedIn: 'root'
})
export class HttprequestService {

  baseUrl = "http://localhost:3000/";

  constructor(private http:HttpClient) { }

  get<T>(url?:string): Observable<T> {
    return this.http.get<T>(this.baseUrl+url);
  }

  add(url:string,emp:IEmployee):Observable<IEmployee>{
    return this.http.post<IEmployee>(this.baseUrl+url,emp);
  }
  
  update(url:string,emp:IEmployee):Observable<IEmployee>{
    return this.http.put<IEmployee>(this.baseUrl+url,emp);
  }

  delete(url:string):Observable<IEmployee>{
    return this.http.delete<IEmployee>(this.baseUrl+url);
  }
}
