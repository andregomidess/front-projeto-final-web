import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    if (this.authService.isUserLoggedIn()) {
      console.log('ta logado')
      return true;
    } else {
      console.log('n ta logado');
      this.router.navigate(['/login']);
      return false;
    }
  }
}


