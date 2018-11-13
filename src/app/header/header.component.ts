import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  username$: Observable<any>;


  constructor(
    private readonly store: Store<any>
  ) {
    this.username$ = this.store.select(fromStore.getUsername);
  }


  logOut() {
    this.store.dispatch(new fromStore.LogoutUser());
  }
}
