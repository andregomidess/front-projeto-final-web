import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConteudoPaginaComponent } from '../conteudo-pagina/conteudo-pagina.component';
import { TelaHomeRoutingModule } from './tela-home-routing.module';



@NgModule({
  declarations: [ConteudoPaginaComponent],
  imports: [
    CommonModule, TelaHomeRoutingModule
  ], exports: [
  ]
})
export class TelaHomeModule { }
