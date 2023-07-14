import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLivroComponent } from './tela-acervos/card-livro/card-livro.component';
import { TelaAcervosComponent } from './tela-acervos/tela-acervos.component';
import { CampoBsucaComponent } from './tela-acervos/campo-bsuca/campo-bsuca.component';
import { TelaCadastrarAcervosComponent } from './tela-cadastrar-acervos/tela-cadastrar-acervos.component';
import { AtualizarRemoverAcervosComponent } from './atualizar-remover-acervos/atualizar-remover-acervos.component';
import { CampoBuscaComponent } from './atualizar-remover-acervos/campo-busca/campo-busca.component';
import { TabelaAcervosComponent } from './atualizar-remover-acervos/tabela-acervos/tabela-acervos.component';
import { CounteudoPaginaRoutingModule } from './conteudo-pagina-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';





@NgModule({
  declarations: [CardLivroComponent, TelaAcervosComponent, CampoBsucaComponent, TelaCadastrarAcervosComponent, AtualizarRemoverAcervosComponent, CampoBuscaComponent, TabelaAcervosComponent],
  imports: [
    CommonModule, CounteudoPaginaRoutingModule, ReactiveFormsModule, ComponentsModule
  ], exports: [
    CardLivroComponent, TelaAcervosComponent, TelaCadastrarAcervosComponent, AtualizarRemoverAcervosComponent
  ]
})
export class ConteudoPaginaModule { }
