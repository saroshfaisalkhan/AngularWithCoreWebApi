import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Designation, Employee } from './employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeUrl:string='https://localhost:44339/api/Employees';
  private designationUrl:string='https://localhost:44339/api/Designations';
 

  constructor(private http:HttpClient) { }


  //getting list of employee and designation
  listEmployee:Employee[]=[];
  listDesignation:Designation[]=[];

  employeeData:Employee=new Employee(); // for post/update/delete single employee
  designation:Designation=new Designation();

  SaveEmployee():Observable<Employee>{

    return this.http.post<Employee>(this.employeeUrl,this.employeeData);
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

  GetDesignation(id:number):Observable<Designation>{
    return this.http.get<Designation>(`${this.designationUrl}/${id}`);
  }
  PostDesignation():Observable<Designation>{
    return this.http.post<Designation>(this.designationUrl,this.designation);
  }
}
