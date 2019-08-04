import { Component, OnInit } from '@angular/core';
import { MockData } from 'src/app/model/mock-data';
import { Bill } from 'src/app/model/bill';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  mockData: MockData = new MockData();
  bills: Bill[] = [];

  constructor() {
    this.bills = this.mockData.bills;
  }

  ngOnInit() {
  }

}
