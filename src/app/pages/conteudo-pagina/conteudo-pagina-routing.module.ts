import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaAcervosComponent } from '../conteudo-pagina/tela-acervos/tela-acervos.component';
import { TelaCadastrarAcervosComponent } from '../conteudo-pagina/tela-cadastrar-acervos/tela-cadastrar-acervos.component';
import { AtualizarRemoverAcervosComponent } from '../conteudo-pagina/atualizar-remover-acervos/atualizar-remover-acervos.component';
import { TelaHomeComponent } from '../tela-home/tela-home.component';
import { InfoLivrosComponent } from '../info-livros/info-livros.component';
;

const routes: Routes = [
  {path: '', component: TelaHomeComponent, children: [
    {path: 'acervos', component: TelaAcervosComponent, children: [
      {path: ':id', component: InfoLivrosComponent}
    ]},
    {path: 'cadastrar', component: TelaCadastrarAcervosComponent},
    {path: 'atualizar-remover', component: AtualizarRemoverAcervosComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounteudoPaginaRoutingModule { }
