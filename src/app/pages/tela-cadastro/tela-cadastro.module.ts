import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCadastroComponent } from './card-cadastro/card-cadastro.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { InputCadastroComponent } from './input-cadastro/input-cadastro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CardCadastroComponent,
    FormCadastroComponent,
    InputCadastroComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [CardCadastroComponent, FormCadastroComponent]
})
export class TelaCadastroModule { 
    
}