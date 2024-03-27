import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'jwt_token';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/user/register', user);
  }

  login(credentials: {email: string, password: string}): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/user/authenticate', credentials)
    .pipe(
      tap(response => {
        localStorage.setItem(this.TOKEN_KEY, response.token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
