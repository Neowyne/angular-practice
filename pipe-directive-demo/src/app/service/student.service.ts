import { Injectable } from '@angular/core';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  list: Student[] = [
    {
<<<<<<< HEAD
      name: "Tomi",
      age: 28,
      email: "smith@hotmail.com",
=======
      name: "Dani",
      age: 16,
      email: "dani@freemail.com",
>>>>>>> ff5c46e34042d62e310f50f4b7d9cfe42d8dfe3f
      gender: true,
      regDate: new Date(),
      skills: [{
        name: "js",
        level: 7
      }]
    },
<<<<<<< HEAD

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
=======
    {
      name: "Andris",
      age: 16,
      email: "andris@gmail.com",
      gender: true,
      regDate: new Date(),
      skills: [{
        name: "js",
        level: 9
      }]
    },
    {
      name: "Rebeka",
      age: 16,
      email: "rebeka@gmail.com",
      gender: false,
      regDate: new Date(),
      skills: [{
        name: "angular",
        level: 6
      }]
    },
  ];

  newStudent: Student = {
    name: "Gergő",
    age: 16,
    email: "gergo@gmail.com",
    gender: true,
    regDate: new Date(),
    skills: [{
      name: "angular",
      level: 6
    }]
  };

  constructor() {
    /* setInterval( () => {
      this.list.push( this.newStudent );
    }, 2000); */
  }
}
>>>>>>> ff5c46e34042d62e310f50f4b7d9cfe42d8dfe3f
