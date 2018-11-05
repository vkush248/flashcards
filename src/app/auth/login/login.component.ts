import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '../../services/auth.service';
import * as fromStore from '../../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  pageTitle: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private store: Store<fromStore.AppState>) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  logIn(userData) {
    this.authService.signIn(userData).subscribe(
      (res) => {
        this.store.dispatch(new fromStore.SelectSnackbar({ message: `Hello ${res.username}!`, type: 'success' }));
        this.router.navigate(['cards']);
      },
      e => {
        console.log(e._body);
        this.store.dispatch(new fromStore.SelectSnackbar({ message: e._body, type: 'warn' }));
      }
    );
  }
}
