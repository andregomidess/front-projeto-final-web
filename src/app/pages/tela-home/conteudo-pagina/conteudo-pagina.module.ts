import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLivroComponent } from './tela-acervos/card-livro/card-livro.component';
import { TelaAcervosComponent } from './tela-acervos/tela-acervos.component';
import { CampoBsucaComponent } from './tela-acervos/campo-bsuca/campo-bsuca.component';



@NgModule({
  declarations: [CardLivroComponent, TelaAcervosComponent, CampoBsucaComponent],
  imports: [
    CommonModule
  ], exports: [
    CardLivroComponent, TelaAcervosComponent
  ]
})
export class ConteudoPaginaModule { }
