import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';
import { FormControl,FormGroup } from '@angular/forms';
import { identity, switchMap } from 'rxjs';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit{
  

  constructor(public empService:EmployeeService) {}

  myForm=new FormGroup({
   //id:new FormControl(),
    name:new FormControl(),
    lastName:new FormControl(),
    email:new FormControl(),
    doj:new FormControl(),
    age:new FormControl(),
    gender:new FormControl(),
    isMarried:new FormControl(),
    isActive:new FormControl(),
    designationId:new FormControl(),
    designation:new FormControl()

  });
  
  ngOnInit(): void {
    this.empService.GetDesignations().subscribe(data=>{
      this.empService.listDesignation=data;
    })
  
  }

  onFormSubmit(){
  //  this.empService.employeeData.id=this.myForm.value.id;
    // this.empService.employeeData.name=this.myForm.value.name;  
    // this.empService.employeeData.lastName=this.myForm.value.lastName;
    // this.empService.employeeData.email=this.myForm.value.email;
    // this.empService.employeeData.doj=this.myForm.value.doj;  
    // this.empService.employeeData.age=this.myForm.value.age;
    // this.empService.employeeData.gender=this.myForm.value.gender;
    // this.empService.employeeData.ismarried=this.myForm.value.isMarried;
    // this.empService.employeeData.isactive=this.myForm.value.isActive;  
    // this.empService.employeeData.designationId=this.myForm.value.designationId;

    //   this.empService.GetDesignation(this.empService.employeeData.designationId).subscribe(data=>{
    //     this.empService.employeeData.designation=data.designation;
      // });
    // this line of code works same as above large code

  //  Object.assign(this.empService.employeeData,this.myForm.value);

  //  this.empService.SaveEmployee().subscribe(data=>{
  //   console.log("Data Successfully Saved",data);
  //   this.ngOnInit();
  //  })

  const formValues = this.myForm.value;
  const { designationId } = formValues;

  this.empService.GetDesignation(designationId).pipe(
    switchMap(designationData => {
      this.empService.employeeData = {
        id:0,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

        name:formValues.name,
        lastName:formValues.lastName,
        email:formValues.email,
        doj:formValues.doj,
        age:formValues.age,
        gender:formValues.gender,
        ismarried:formValues.isMarried,
        isactive:formValues.isActive,
        designationId:formValues.designationId,
        designation: designationData.designation,

      };

      return this.empService.SaveEmployee();
    })
  ).subscribe(data => {
    console.log("Data Successfully Saved", data);
    this.ngOnInit(); // Consider better ways to refresh the component
  });
}
   }



