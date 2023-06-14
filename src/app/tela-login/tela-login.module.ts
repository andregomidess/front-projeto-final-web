import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLoginComponent } from './card-login/card-login.component';
import { FormLoginComponent } from './form-login/form-login.component';



@NgModule({
  declarations: [
    CardLoginComponent,
    FormLoginComponent
  ],
  imports: [
    CommonModule
  ], exports: [CardLoginComponent, FormLoginComponent]
})
export class TelaLoginModule { }
