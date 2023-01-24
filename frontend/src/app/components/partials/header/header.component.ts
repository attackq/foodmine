import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user!: User;
  cartQuantity = 0;
  constructor(
    private cartService: CartService,
    private userService: UserService
  ) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cartQuantity = cart.totalCount;
    });
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    });
  }

  ngOnInit(): void {}

  logout() {
    this.userService.logout();
  }

  get isAuth() {
    return this.user.token;
  }
}
