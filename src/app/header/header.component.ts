import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges {
  username: string;
  isLoggedIn: Observable<any>;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    console.log(this.isLoggedIn);
    this.checkIfLoggedIn();
    this.username = 'tonymacaroni';
  }

  checkIfLoggedIn() {
    console.log('checkIfLoggedIn');
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logOut() {
    this.authService.logOut().subscribe(x => {
      this.router.navigate(['login']);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    this.checkIfLoggedIn();
  }
}
