import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  pageTitle: string;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  logIn(userData) {
    if (userData.username === 'test' && userData.password === 'test') {

    } else {
      const isSignedIn$ = this.authService.signIn(userData).pipe(filter(result => result.isValid));
      const isNotSignedIn$ = this.authService.signIn(userData).pipe(filter(result => !result.isValid));

      isSignedIn$.subscribe(
        () => {
          // dispatch an action to get users cards(use username property or userData)
          this.router.navigate(['cards']);
        }
      );

      isNotSignedIn$.subscribe(() => {
        // dispatch an action to show a message
        console.error('Wrong password or username');
      });
    }
  }
}
