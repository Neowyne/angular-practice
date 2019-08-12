import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  userSubscription: any;
  userAmount: number = 0;
  userActiveAmount: number = 0;
  userInactiveAmount: number = 0;
  balanceSum: number = 0;
  favoriteApple: number = 0;
  favoriteStrawberry: number = 0;
  favoriteBanana: number = 0;
  userList: User[] = [];


  constructor(
    private userService: UserService
  ) {

  }

  ngOnInit() {
    this.userSubscription = this.userService.getAll().subscribe(
      users => this.userList = users
    )
  }

  getUserAmount() {
    for (let i in this.userList) {
      if (this.userList[i].isActive == true) {
        this.userActiveAmount = this.userActiveAmount + 1
      } else {
        this.userInactiveAmount = this.userInactiveAmount + 1
      }
    }

  }

  getBalance() {
    for (let i in this.userList) {
      //let balanceSum = parseFloat()
    }

  }

  getFavoriteApple() {
    for (let i in this.userList) {
      if (this.userList[i].favoriteFruit === 'apple') {
        this.favoriteApple = this.favoriteApple + 1
      }
    }
    return this.favoriteApple;
  }

  getFavoriteStrawberry() {
    for (let i in this.userList) {
      if (this.userList[i].favoriteFruit === 'strawberry') {
        this.favoriteStrawberry = this.favoriteStrawberry + 1
      }
    }
    return this.favoriteStrawberry;
  }

  getFavoriteBanana() {
    for (let i in this.userList) {
      if (this.userList[i].favoriteFruit === 'banana') {
        this.favoriteBanana = this.favoriteBanana + 1
      }
    }
    return this.favoriteBanana;
  }
}
