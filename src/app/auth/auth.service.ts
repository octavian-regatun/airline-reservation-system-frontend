import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { decodeJwt } from 'jose';
import { Subject, catchError, firstValueFrom, lastValueFrom, of } from 'rxjs';
import { environment } from 'src/environments/environment';

export type JwtDecoded = {
  exp: number;
  iat: number;
  id: number;
  sub: string;
};

export type UserRole = 'User' | 'Admin';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: User | null = null;
  public jwtDecoded: JwtDecoded | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  public signUp(data: {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
  }) {
    return this.http.post<{ token: string }>(
      environment.apiUrl + '/auth/sign-up',
      data
    );
  }

  public signIn(data: { email: string; password: string }) {
    return this.http.post<{ token: string }>(
      environment.apiUrl + '/auth/sign-in',
      data
    );
  }

  public signOut() {
    localStorage.removeItem('jwt');
    return this.router.navigate(['']);
  }

  public async getUser() {
    const jwt = this.getJwt();
    const jwtDecoded = this.getJwtDecoded(jwt);

    if (jwtDecoded === null) return Promise.resolve(null);

    this.user = await firstValueFrom(
      this.http.get<User>(environment.apiUrl + `/users/${jwtDecoded.id}`)
    );

    return this.user;
  }

  public getJwt() {
    return localStorage.getItem('jwt');
  }

  public setJwt(jwt: string) {
    localStorage.setItem('jwt', jwt);
  }

  public getJwtDecoded(jwt: string | null) {
    if (jwt === null) return null;
    return decodeJwt(jwt) as JwtDecoded;
  }

  public isJwtExpired(jwtDecoded: JwtDecoded | null) {
    if (jwtDecoded === null) return true;
    return jwtDecoded.exp * 1000 < Date.now();
  }

  public isJwtValid(jwtDecoded: JwtDecoded | null) {
    return !this.isJwtExpired(jwtDecoded);
  }
}
