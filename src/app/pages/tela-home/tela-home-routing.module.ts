import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('../conteudo-pagina/conteudo-pagina.module').then(m => m.ConteudoPaginaModule)}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelaHomeRoutingModule { }
