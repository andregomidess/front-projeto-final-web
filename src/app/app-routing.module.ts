import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaHomeComponent } from './pages/tela-home/tela-home.component';
import { TelaLoginComponent } from './pages/tela-login/tela-login.component';
import { TelaCadastrarComponent } from './pages/tela-cadastrar/tela-cadastrar.component';

const routes: Routes = [
  //rotas do projeto
  {path: '', component: TelaLoginComponent},
  {path: 'home', component: TelaHomeComponent },
  {path: 'cadastrar', component: TelaCadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
