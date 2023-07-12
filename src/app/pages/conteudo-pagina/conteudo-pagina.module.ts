import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLivroComponent } from './tela-acervos/card-livro/card-livro.component';
import { TelaAcervosComponent } from './tela-acervos/tela-acervos.component';
import { CampoBsucaComponent } from './tela-acervos/campo-bsuca/campo-bsuca.component';
import { TelaCadastrarAcervosComponent } from './tela-cadastrar-acervos/tela-cadastrar-acervos.component';
import { AtualizarRemoverAcervosComponent } from './atualizar-remover-acervos/atualizar-remover-acervos.component';
import { CampoBuscaComponent } from './atualizar-remover-acervos/campo-busca/campo-busca.component';
import { TabelaAcervosComponent } from './atualizar-remover-acervos/tabela-acervos/tabela-acervos.component';
import { GerenciamentoLivrosComponent } from './gerenciamento-livros/gerenciamento-livros.component';
import { TabelaStatusComponent } from './gerenciamento-livros/tabela-status/tabela-status.component';
import { CampoBuscaLivroComponent } from './gerenciamento-livros/campo-busca-livro/campo-busca-livro.component';
import { TelaFavComponent } from './tela-fav/tela-fav.component';




@NgModule({
  declarations: [CardLivroComponent, TelaAcervosComponent, CampoBsucaComponent, TelaCadastrarAcervosComponent, AtualizarRemoverAcervosComponent, CampoBuscaComponent, TabelaAcervosComponent, GerenciamentoLivrosComponent, TabelaStatusComponent, CampoBuscaLivroComponent, TelaFavComponent],
  imports: [
    CommonModule
  ], exports: [
    CardLivroComponent, TelaAcervosComponent, TelaCadastrarAcervosComponent, AtualizarRemoverAcervosComponent, GerenciamentoLivrosComponent, TelaFavComponent
  ]
})
export class ConteudoPaginaModule { }
