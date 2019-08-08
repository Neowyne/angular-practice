<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { MockData } from 'src/app/model/mock-data';
import { Employee } from 'src/app/model/employee';
import { Bill } from 'src/app/model/bill';
=======
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MockData } from '../../model/mock-data';
import { Employee } from 'src/app/model/employee';
import { Subscription } from 'rxjs';
>>>>>>> ff5c46e34042d62e310f50f4b7d9cfe42d8dfe3f

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {

  modalCounter: number = 0;
<<<<<<< HEAD
  mockData: MockData = new MockData();
  employees: Employee[] = [];
  bills: Bill[] = [];

  constructor() {
    this.employees = this.mockData.employee;
    this.bills = this.mockData.bills;
  }
=======
  employeeList: Employee[];
  subscription: Subscription;

  constructor(
    private mock: MockData
  ) { }
>>>>>>> ff5c46e34042d62e310f50f4b7d9cfe42d8dfe3f

  ngOnInit() {
    this.subscription = this.mock.employee$.subscribe(
      employees => this.employeeList = employees,
      err => console.error(err),
      () => console.log('complete')
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  showModal(): void {
    this.modalCounter++;
  }

}
