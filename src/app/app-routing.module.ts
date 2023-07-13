import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { TelaCadastroComponent } from './pages/tela-cadastro/tela-cadastro.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/tela-login/tela-login.module').then(m => m.TelaLoginModule)},
  {path: 'cadastrar', component: TelaCadastroComponent},
  {path: '', loadChildren: () => import('./pages/tela-home/tela-home.module').then(m => m.TelaHomeModule), canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
