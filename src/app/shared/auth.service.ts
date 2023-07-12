import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Token } from '../models/Token.model';
import jwtDecode from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  async login(user: any): Promise<boolean> {
    try {
      const token = await this.http.post<Token>(`${environment.api}/users/login`, user).toPromise();
      if (token && token.token) {
        console.log(token.token);
        window.localStorage.setItem('token', token.token);
        return true;
      } else {
        console.log(token);
        return false;
      }
    } catch (error) {
      console.error('Não autorizado', error);
      return false;
    }
  }

  async createAccount(account: any){
    try {
      const result = await this.http.post<Token>(`${environment.api}/users/register`, account).toPromise();
      console.log('Sucesso ao criar a conta', result);
      return result;
    } catch (error) {
      console.error('Erro ao criar a conta', error);
      return false;
    }
  }
  
  getToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  getTokenExpirationDate(token: string): Date | null {
    const decoded: any = jwtDecode(token);

    if (decoded.exp === undefined) {
      return null;
    }
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp)
    return date;
  }

  // isTokenExpired(token?: string): boolean {
  //   if (!token){
  //     return true;
  //   }
  //   const date = this.getTokenExpirationDate(token);
  //   if (date === undefined) {
  //     return false;
  //   }
  //   return !(date && date.valueOf() > new Date().valueOf())
  // }

  isUserLoggedIn(){
    const token = this.getToken();
    if (!token){
      return false;
    } 
    return true;
  }

}
