import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  logIn(userData) {
    if (userData.username === 'test' && userData.password === 'test') {
      this.router.navigate(['cards']);
    } else {
      alert('Invalid credentials');
    }
  }
}
