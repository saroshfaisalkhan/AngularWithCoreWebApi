import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { EmployeeDetailsComponent } from './employee_folder/employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee_folder/employee-form/employee-form.component'
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { DesignationFormComponent } from './employee_folder/designation-form/designation-form.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmployeeFormComponent,
    DesignationFormComponent,
   

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
