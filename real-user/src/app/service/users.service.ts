import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  access(): void {
    this.http.get(this.url).subscribe(
      (data) => console.log(data)
    )
  }

  read(): Observable<any> {
    return this.http.get(this.url);
  }
}