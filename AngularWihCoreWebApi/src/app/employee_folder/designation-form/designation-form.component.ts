import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-designation-form',
  templateUrl: './designation-form.component.html',
  styleUrls: ['./designation-form.component.css']
})
export class DesignationFormComponent implements OnInit {

  // Injecting services into constructor
   constructor(public empService:EmployeeService) {
    
   }
  
   ngOnInit(){

   }
  
   saveDesignation(form:NgForm){
    this.empService.designation=form.value;
    this.empService.PostDesignation().subscribe({
     next:(resp:any)=>{
      console.log("record saved succefully");
     }
    })

   }

}
