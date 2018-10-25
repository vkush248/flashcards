import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    this.authService.signIn(userData).subscribe(
      (res) => {
        console.log('res', res);
        // dispatch an action to get users cards(use username property or userData)
        this.router.navigate(['cards']);
        setTimeout(x => this.authService.getUser(), 5000);
      }
    );
  }
}
