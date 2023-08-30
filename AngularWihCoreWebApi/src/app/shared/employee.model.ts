export class Employee {
    id:number=0;
    name:string='';
    lastName:string='';
    email:string='';
    age:number=0;
    doj:any;
    gender:string='';
    ismarried:boolean=false;
    isactive:boolean=false;
    designationId:number=0;
    designation:string|null=''
}

export class Designation{
    id:number=0;
    designation:string='';
}

