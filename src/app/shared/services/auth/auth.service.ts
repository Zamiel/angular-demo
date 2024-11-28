import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static _authTokenName = 'authToken';

  getToken(): string | null {
    const matches = document.cookie.match(
      new RegExp( `(?:^|; )${AuthService._authTokenName.replace(/([.$?*|{}() \[\]\\/+^])/g, '\\$1')}=([^;]*)`)
    );
    return matches ? decodeURIComponent(matches[1]) : null;
  }

  setCookie(value: string, days: number) {
    const date = new Date(); date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${AuthService._authTokenName}=${value};${expires};path=/`;
  }

  get isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
