import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  private loginForm: FormGroup = new FormGroup ({});

  constructor(private http: HttpClient) {}

  setLoginForm(form: FormGroup): void {
    this.loginForm = form;
  }

  verificarLogin(email: string, senha: string) {
    return this.http.post<any>(`/api/verificar-login`, { email, senha });
  }
}