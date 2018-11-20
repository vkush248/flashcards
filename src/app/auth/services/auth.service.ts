import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _http: Http, private router: Router) { }

  signIn(userData): Observable<any> {
    return this._http.post('/api/login/', userData).pipe(
      map(response => response.json()),
      catchError(response => {
        const error = response.json();
        throw new Error(error.message);
      }),
    );
  }

  signUp(userData): Observable<any> {
    return this._http.post('/api/register/', userData)
      .pipe(
        map(result => result.json()),
        catchError(response => {
          const error = response.json();
          throw new Error(error.message);
        }),
      );
  }

  getUser(username): Observable<any> {
    return this._http.get('/api/profile/:username', username);
  }

  isLoggedIn(): Observable<boolean> {
    return this._http.get('/api/is-logged-in').pipe(
      map(x => x.json()),
      catchError(response => {
        this.router.navigate(['login']);
        const error = response.json();
        throw new Error(error.message);
      }),
      pluck('isLoggedIn'),
    );
  }

  logOut(): Observable<any> {
    return this._http.post('/api/log-out/', { username: 'tonymacaroni' }).pipe(
      map(res => res.json()),
      catchError(error => {
        throw error.json();
      }),
    );
  }

}
