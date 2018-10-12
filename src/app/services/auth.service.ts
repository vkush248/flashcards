import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;

  constructor(private _http: Http) { }

  signIn(userData): Observable<any> {
    const headers = new Headers({ 'Content-type': 'application/json' });
    const options = new RequestOptions({ headers });
    return this._http.post('/api/signIn/', JSON.stringify(userData), options)
      .pipe(map(result => result.json()));
  }

  signUp(userData): Observable<any> {
    const headers = new Headers({ 'Content-type': 'application/json' });
    const options = new RequestOptions({ headers });
    return this._http.post('/api/register/', JSON.stringify(userData), options)
      .pipe(tap(res => console.dir(res)));
  }

  getUser() {
    return this._http.get('/api/profile/123').pipe(tap(x => console.log(x)));
  }

  isLoggedIn() {
    return false;
  }
}
