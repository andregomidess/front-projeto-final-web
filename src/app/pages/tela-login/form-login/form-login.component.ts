import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {
  @Output() login: EventEmitter<void> = new EventEmitter<void>();
  constructor(private router: Router) {}

  realizarLogin(){
    this.router.navigate(['home']);
  }
}
