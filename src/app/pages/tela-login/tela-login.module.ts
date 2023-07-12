import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './form-login/form-login.component';
import { RouterModule } from '@angular/router';
import { TelaLoginRoutingModule } from './tela-login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    FormLoginComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    TelaLoginRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ], 
  exports: [ FormLoginComponent, ],
 
})
export class TelaLoginModule { }
