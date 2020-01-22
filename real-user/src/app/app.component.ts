import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list$: Observable<any> = this.us.read();

  constructor(private us: UsersService) {
    us.access();
  }

  title = 'real-user';
}
