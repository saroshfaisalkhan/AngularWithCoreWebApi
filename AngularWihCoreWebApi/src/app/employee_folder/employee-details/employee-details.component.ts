import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/employee.model';
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

//  POPUP EMPLOYEE FOR EDITING
 populateEmployee(selectedEmployee:Employee){
  console.log(selectedEmployee);
  this.empService.employeeData=selectedEmployee;
 }

 // DELETE EMPLOYEE
 deleteEmployee(id:number){
  console.log(id);

  if(confirm("Are you sure to delete this record?"))
  {
    this.empService.DeleteEmployee(id).subscribe({
      next:(res)=>{
        console.log("Record Deleted Successfully");
        this.empService.GetEmployees().subscribe(data=>{
          this.empService.listEmployee=data
         });
      },
      error:(err:any)=> {
        console.log("Record is not Deleted");
      },
    }

    )
  }
 
 }
}
