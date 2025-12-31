import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istudent } from '../const/type';
import { studentArr } from '../../model/data';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  constructor() { }
  studentArr: Istudent[] = studentArr
  @ViewChild('fname') fname!: ElementRef<HTMLInputElement>
  @ViewChild('lname') lname!: ElementRef<HTMLInputElement>
  @ViewChild('email') email!: ElementRef<HTMLInputElement>
  @ViewChild('contact') contact!: ElementRef<HTMLInputElement>
  onAdd(): void {
    let fname = this.fname.nativeElement.value;
    let lname = this.lname.nativeElement.value;
    let email = this.email.nativeElement.value;
    let contact = this.contact.nativeElement.value;
    if (!fname || !lname || !email || !contact) return;
    let createObj: Istudent = {
      fname: fname,
      lname: lname,
      email: email,
      contact: contact, 
      id: Date.now().toString()
    }
    studentArr.unshift(createObj)
    this.fname.nativeElement.value=""
    this.lname.nativeElement.value=""
    this.email.nativeElement.value=""
    this.contact.nativeElement.value=""
  }
  onRemove(id:string){
    let value=studentArr.findIndex(s=>s.id===id);
    if (value>-1) {
      studentArr.splice(value,1)
    }
  }
  onEdit(st: Istudent): void {

  }

}
