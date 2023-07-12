import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConteudoPaginaComponent } from '../conteudo-pagina/conteudo-pagina.component';
import { ConteudoPaginaModule } from '../conteudo-pagina/conteudo-pagina.module';
import { TelaHomeRoutingModule } from './tela-home-routing.module';



@NgModule({
  declarations: [ConteudoPaginaComponent],
  imports: [
    CommonModule, ConteudoPaginaModule, TelaHomeRoutingModule
  ], exports: [
    ConteudoPaginaComponent
  ]
})
export class TelaHomeModule { }
