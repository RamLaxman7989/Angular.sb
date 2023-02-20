import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = 'http://localhost:8081/swagger-ui.html#/';

  constructor(private http: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseURL+ '/api/v1/employees');
  }
}
