import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLivroComponent } from './tela-acervos/card-livro/card-livro.component';
import { TelaAcervosComponent } from './tela-acervos/tela-acervos.component';
import { CampoBsucaComponent } from './tela-acervos/campo-bsuca/campo-bsuca.component';
import { TelaCadastrarAcervosComponent } from './tela-cadastrar-acervos/tela-cadastrar-acervos.component';




@NgModule({
  declarations: [CardLivroComponent, TelaAcervosComponent, CampoBsucaComponent, TelaCadastrarAcervosComponent],
  imports: [
    CommonModule
  ], exports: [
    CardLivroComponent, TelaAcervosComponent, TelaCadastrarAcervosComponent
  ]
})
export class ConteudoPaginaModule { }
