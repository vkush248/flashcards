import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import * as fromStore from '../store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent /* implements OnChanges */ {
  username$: Observable<any>;


  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly store: Store<any>
    // private readonly store: Store<fromStore.User>
  ) {
    this.username$ = this.store.select(fromStore.getUsername);
  }


  logOut() {
    this.store.dispatch(new fromStore.LogoutUser());
    // this.authService.logOut().subscribe(x => {
    //   this.router.navigate(['login']);
    // });
  }

  /*   ngOnChanges(changes: SimpleChanges) {
      console.log('ngOnChanges');
      // this.isLoggedIn();
    } */
}
