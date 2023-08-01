import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Designation, Employee } from './employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  employeeUrl:string='https://localhost:7211/api/Employees';
  designationUrl:string='https://localhost:7211/api/Designations';

  //getting list of employee and designation
  listEmployee:Employee[]=[];
  listDesignation:Designation[]=[];

  employeeData:Employee=new Employee(); // for post/update/delete single employee

  SaveEmployee(){
    return this.http.post(this.employeeUrl,this.employeeData);
  }

  UpdateEmployee(){
    return this.http.put(`${this.employeeUrl}/${this.employeeData.id}`,this.employeeData);
  }

  DeleteEmployee(id:number){
    return this.http.delete(`${this.employeeUrl}/${id}`);
  }

  GetEmployees():Observable<Employee[]>  // observable will keeps list of employee and give that method whoever subscribe GetEmployees Method
  {
    return this.http.get<Employee[]>(this.employeeUrl);
  }

  GetDesignations():Observable<Designation[]>{
    return this.http.get<Designation[]>(this.designationUrl);
  }
}
