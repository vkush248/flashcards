import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map, pluck, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;

  constructor(private _http: Http, private router: Router) { }

  signIn(userData): Observable<any> {
    const headers = new Headers({ 'Content-type': 'application/json' });
    const options = new RequestOptions({ headers });
    return this._http.post('/api/login/', JSON.stringify(userData), options).pipe(
      map(response => response.json()),
      catchError(error => {
        throw error.json();
      }),
      tap(() => {
        if (this.redirectUrl) {
          this.router.navigate([`${this.redirectUrl}`]);
        } else { this.router.navigate(['cards']); }
      })
    );
  }

  signUp(userData): Observable<any> {
    const headers = new Headers({ 'Content-type': 'application/json' });
    const options = new RequestOptions({ headers });
    return this._http.post('/api/register/', JSON.stringify(userData), options)
      .pipe(
        map(result => result.json()),
      );
  }

  getUser(username): Observable<any> {
    return this._http.get('/api/profile/:username', username).pipe(tap(x => console.log(x)));
  }

  isLoggedIn(): Observable<boolean> {
    return this._http.get('/api/is-logged-in').pipe(
      map(x => x.json()),
      pluck('isLoggedIn'),
    );
  }

  logOut(): Observable<any> {
    const headers = new Headers({ 'Content-type': 'application/json' });
    const options = new RequestOptions({ headers });
    return this._http.post('/api/log-out/', JSON.stringify({ username: 'tonymacaroni' }), options).pipe(
      tap(x => console.log(x)),
      map(res => res.json()),
    );
  }

}
