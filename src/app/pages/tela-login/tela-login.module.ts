import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLoginComponent } from './card-login/card-login.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { InputFloatComponent } from './input-float/input-float.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardLoginComponent,
    FormLoginComponent,
    InputFloatComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [CardLoginComponent, FormLoginComponent]
})
export class TelaLoginModule { }
