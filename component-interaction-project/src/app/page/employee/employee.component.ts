import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MockData } from 'src/app/model/mock-data';
=======
import { MockData } from '../../model/mock-data';
>>>>>>> ff5c46e34042d62e310f50f4b7d9cfe42d8dfe3f
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  title = "Employees"

<<<<<<< HEAD
  mockData: MockData = new MockData();
  employees: Employee[] = [];

  constructor() {
    this.employees = this.mockData.employee;
=======
  employeeList: Employee[];

  constructor(
    private mock: MockData
  ) {
    this.employeeList = this.mock.employee;
    this.mock.employee = [];
>>>>>>> ff5c46e34042d62e310f50f4b7d9cfe42d8dfe3f
  }

  ngOnInit() {
  }

}
