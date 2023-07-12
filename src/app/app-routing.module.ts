import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaHomeComponent } from './pages/tela-home/tela-home.component';
import { AuthGuard } from './guards/auth.guard';
import { TelaLoginComponent } from './pages/tela-login/tela-login.component';
import { TelaCadastroComponent } from './pages/tela-cadastro/tela-cadastro.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/tela-login/tela-login.module').then(m => m.TelaLoginModule),},
  {path: 'cadastrar', component: TelaCadastroComponent},
  {path: '', loadChildren: () => import('./pages/tela-home/tela-home.module').then(m => m.TelaHomeModule), canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
