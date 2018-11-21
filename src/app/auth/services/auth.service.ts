import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _http: HttpClient, private router: Router) { }

  signIn(userData): Observable<any> {
    return this._http.post('/api/login/', userData).pipe(
      catchError(error => {
        throw new Error(error.message);
      }),
    );
  }

  signUp(userData): Observable<any> {
    return this._http.post('/api/register/', userData)
      .pipe(
        catchError(error => {
          throw new Error(error.message);
        }),
      );
  }

  getUser(username): Observable<any> {
    return this._http.get('/api/profile/:username', username);
  }

  isLoggedIn(): Observable<boolean> {
    return this._http.get('/api/is-logged-in').pipe(
      catchError(error => {
        this.router.navigate(['login']);
        throw new Error(error.message);
      }),
      pluck('isLoggedIn'),
    );
  }

  logOut(): Observable<any> {
    return this._http.post('/api/log-out/', { username: 'tonymacaroni' }).pipe(
      catchError(error => {
        throw error;
      }),
    );
  }

}
