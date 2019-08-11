import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { Subscribable, Subscription } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }


}
