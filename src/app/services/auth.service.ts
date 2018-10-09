import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: Http) { }

  signIn(userData): Observable<any> {
    const headers = new Headers({ 'Content-type': 'application/json' });
    const options = new RequestOptions({ headers });
    return this._http.post('/api/signIn/', JSON.stringify(userData), options)
      .pipe(tap(x => console.log(x)), catchError(err => {
        console.dir(err);
        throw err;
      }));
  }

  signUp(userData): Observable<any> {
    return this._http.post('/api/signUp/', JSON.stringify(userData)).pipe(tap(x => console.log(x)));
  }

  getUser() {
    return this._http.get('/api/profile/123').pipe(tap(x => console.log(x)));
  }
}
