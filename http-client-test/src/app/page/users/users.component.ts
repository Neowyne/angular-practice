import { Component, OnInit } from '@angular/core';


import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title = 'Data Table';
  userList: User[] = [];
  userSubscription: Subscription;
  filterPhrase: string = '';
  orderKey: string = '';
  orderDirection: number = 1;
  changeCounter: number = 0;


  constructor(
    private userService: UserService

  ) { }

  ngOnInit() {
    this.userSubscription = this.userService.getAll().subscribe(
      users => this.userList = users
    );
  }

  deletePrompt(user: User) {
    let result = confirm("Are you sure you want to delete this?");
    if (result) {
      this.userService.remove(user.id).subscribe(
        response => {
          let index = this.userList.indexOf(user);
          this.userList.splice(index, 1);
          this.changeCounter++
        }
      )
    }
  }

  onSort(key: string): void {
    if (key === this.orderKey) {
      this.orderDirection = this.orderDirection == -1 ? 1 : -1;
    } else {
      this.orderDirection = 1;
    }
    this.orderKey = key;
  }
}