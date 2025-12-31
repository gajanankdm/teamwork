import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  constructor() { }
studentArr = [
  {
    fname: 'Gajanan',
    lname: 'Kadam',
    email: 'gajanan@gmail.com',
    contact: '9876543210'
  },
  {
    fname: 'Rahul',
    lname: 'Patil',
    email: 'rahul@gmail.com',
    contact: '9123456780'
  }
];


}
