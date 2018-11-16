import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/services/auth.service';
import * as fromStore from '../../store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup;
  pageTitle: string;
  validations: any;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private readonly store: Store<fromStore.AppState>
  ) {
    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(6),
        // Validators.pattern('/^[a-zA-Z0-9]+$/'), //Why it doesn't work?
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(6),
        Validators.pattern('^[a-zA-Z0-9]+$'),
      ])],
    });

    this.validations = [
      { type: 'required', message: 'This field is required' },
      { type: 'minlength', message: 'This field must be at least 6 characters long' },
      { type: 'email', message: 'Not a valid email' },
      { type: 'maxlength', message: 'This field cannot be more than 20 characters long' },
      { type: 'pattern', message: 'You can use only english letters and numbers' },
    ];
  }

  signUp(userData) {
    this.store.dispatch(new fromStore.RegisterUser(userData));
  }
}
