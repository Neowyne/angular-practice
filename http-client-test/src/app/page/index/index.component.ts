import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

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


  constructor(
    private userService: UserService
  ) {
    this.userSubscription = this.userService.getAll().subscribe(

    )
  }

  ngOnInit() {
  }

  getUserAmount() {


  }

  getBalance() {

  }


}
