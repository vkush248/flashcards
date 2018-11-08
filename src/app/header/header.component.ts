import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  username: string;
  isLoggedIn: Observable<any>;

  constructor(private readonly authService: AuthService) {
    this.username = 'tonymacaroni';
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logOut() {
    this.authService.logOut();
  }

}
