import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

// Injecting services into constructor
 constructor(public empService:EmployeeService) {
  
 }

 ngOnInit(){
   this.empService.GetEmployees().subscribe(data=>{
    this.empService.listEmployee=data
   });
 }
}
