import { Injectable } from '@angular/core';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  list: Student[] = [
    {
      name: "Tomi",
      age: 28,
      email: "smith@hotmail.com",
      gender: true,
      regDate: new Date(),
      skills: [{
        name: "js",
        level: 7
      }]
    },

    {
      name: "Rebeka",
      age: 24,
      email: "bubble@freemail.com",
      gender: false,
      regDate: new Date(),
      skills: [{
        name: "angular",
        level: 6
      }]
    },

    {
      name: "Kriszta",
      age: 26,
      email: "neowyne@gmail.com",
      gender: false,
      regDate: new Date(),
      skills: [{
        name: "html",
        level: 9
      }]
    },

    {
      name: "Oláh",
      age: 25,
      email: "olah@gmail.com",
      gender: true,
      regDate: new Date(),
      skills: [{
        name: "html",
        level: 9
      }]
    },
  ]

  constructor() { }
}