import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istudents } from '../module/std';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
onUpdate() {
throw new Error('Method not implemented.');
}

  constructor() { }

 
editId!:string

studentarray:Array<Istudents> = [
  {
    fname: 'Rahul',
    lname: 'Sharma',
    email: 'rahul@gmail.com',
    contact: '9876543210',
    city: 'Mumbai',
    id:"12"
  },
  {
    fname: 'Priya',
    lname: 'Patil',
    email: 'priya@gmail.com',
    contact: '9123456780',
    city: 'Pune',
     id:"15"
  },
  {
    fname: 'Amit',
    lname: 'Verma',
    email: 'amit@gmail.com',
    contact: '9988776655',
    city: 'Delhi',
     id:"182",
  },
  {
    fname: 'Sneha',
    lname: 'Kulkarni',
    email: 'sneha@gmail.com',
    contact: '9090909090',
    city: 'Nagpur',
     id:"192",
  },
  {
    fname: 'Karan',
    lname: 'Singh',
    email: 'karan@gmail.com',
    contact: '9012345678',
    city: 'Indore',
     id:"102",
  }
];

isIneditmode:boolean=false



@ViewChild('fname')fname!:ElementRef
@ViewChild('lname')lname!:ElementRef
@ViewChild('email')email!:ElementRef
@ViewChild('contact')contact!:ElementRef
@ViewChild('city')city!:ElementRef


 ngOnInit(): void {
  }

  uuid = () => {
    return String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(
      /[xy]/g,
      character => {
        const random = (Math.random() * 16) | 0
        const value = character === 'x' ? random : (random & 0x3) | 0x8
        return value.toString(16)
      }
    )
  }


onStdAdd(){
if(
  this.fname.nativeElement.value &&
  this.lname.nativeElement.value &&
  this.email.nativeElement.value &&
  this.contact.nativeElement.value &&
  this.city.nativeElement.value
){
let stdObj:Istudents={
  fname:  this.fname.nativeElement.value ,
  lname:  this.lname.nativeElement.value ,
  email:  this.email.nativeElement.value ,
  contact:   this.contact.nativeElement.value ,
  city:   this.city.nativeElement.value,
  id:this.uuid()
}
{
     this.fname.nativeElement.value = ''
     this.lname.nativeElement.value = ''
        this.email.nativeElement.value = ''
        this.contact.nativeElement.value = ''
 
        this.studentarray.push(stdObj)
}
}
}

onRemove(id:string){
  let getindex=this.studentarray.findIndex(a=>a.id===id)
  this.studentarray.splice(getindex,1)

}



onEdit(std: Istudents) {
    this.editId = std.id

    this.fname.nativeElement.value = std.fname
    this.lname.nativeElement.value = std.lname
    this.email.nativeElement.value = std.email
    this.contact.nativeElement.value = std.contact
    this.city.nativeElement.value = std.city

    this.isIneditmode = true
  }



}
