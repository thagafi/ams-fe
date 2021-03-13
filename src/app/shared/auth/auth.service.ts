import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { User } from 'app/interfaces/user';


@Injectable()
export class AuthService {
  

  constructor(protected http: HttpClient, public router: Router) {  }

  signupUser(data): Observable<User> {
    return this.http.post<User>(`${environment.api}/register`, data);
  }

  signinUser(data):  Observable<any> {
    return this.http.post(`${environment.api}/login`, data);
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${environment.api}/logout`, {});
  }

  updateInfo(data): Observable<User> {
    return this.http.put<User>(`${environment.api}/users/info`, data);
  }

  updatePassword(data): Observable<User> {
    return this.http.put<User>(`${environment.api}/users/password`, data);
  }

  isAuthenticated(): Observable<User> {
    return this.http.get<User>(`${environment.api}/user`);
  }
}
