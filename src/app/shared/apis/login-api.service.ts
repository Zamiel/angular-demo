import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '@environments/environment';

interface LogInRequest {
  email: string;
  password: string;
}

interface UserResponse {
  id: number;
  username: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {
  private static apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public login(request: LogInRequest): Observable<string> {
    return this.http.post<UserResponse>(`${LoginApiService.apiUrl}/login`, request)
      .pipe(
        map(({ token }) => token)
      );
  }
}
