import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLivroComponent } from './tela-acervos/card-livro/card-livro.component';
import { TelaAcervosComponent } from './tela-acervos/tela-acervos.component';
import { CampoBsucaComponent } from './tela-acervos/campo-bsuca/campo-bsuca.component';
import { TelaCadastrarAcervosComponent } from './tela-cadastrar-acervos/tela-cadastrar-acervos.component';
import { AtualizarRemoverAcervosComponent } from './atualizar-remover-acervos/atualizar-remover-acervos.component';
import { CampoBuscaComponent } from './atualizar-remover-acervos/campo-busca/campo-busca.component';
import { TabelaAcervosComponent } from './atualizar-remover-acervos/tabela-acervos/tabela-acervos.component';

import { TelaFavComponent } from './tela-fav/tela-fav.component';
import { CounteudoPaginaRoutingModule } from './conteudo-pagina-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [CardLivroComponent, TelaAcervosComponent, CampoBsucaComponent, TelaCadastrarAcervosComponent, AtualizarRemoverAcervosComponent, CampoBuscaComponent, TabelaAcervosComponent,  TelaFavComponent],
  imports: [
    CommonModule, CounteudoPaginaRoutingModule, ReactiveFormsModule, ComponentsModule, FormsModule
  ], exports: [
    CardLivroComponent, TelaAcervosComponent, TelaCadastrarAcervosComponent, AtualizarRemoverAcervosComponent, TelaFavComponent
  ]
})
export class ConteudoPaginaModule { }
