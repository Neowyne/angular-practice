import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======
>>>>>>> 144301cba7e18638c5a0bba2887f52b0be221d99

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: Order[] = [
    new Order(),
    new Order(),
    new Order()
<<<<<<< HEAD
  ]

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:3210/orders');

    /* return new Observable(observer => {
      observer.next(this.orders);
    }); */
  }
=======
  ];

  constructor() { }

  getAll(): Observable<any> {
    return new Observable( observer => {
      observer.next(this.orders);
    });
  }

>>>>>>> 144301cba7e18638c5a0bba2887f52b0be221d99
}
