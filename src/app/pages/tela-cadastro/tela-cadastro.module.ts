import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCadastroComponent } from './card-cadastro/card-cadastro.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    CardCadastroComponent,
    FormCadastroComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ComponentsModule
  ], exports: [CardCadastroComponent, FormCadastroComponent]
})
export class TelaCadastroModule { 
    
}