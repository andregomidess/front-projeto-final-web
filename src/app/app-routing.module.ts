import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './pages/tela-login/tela-login.component';
import { TelaHomeComponent } from './pages/tela-home/tela-home.component';

const routes: Routes = [
  {path: '', component: TelaLoginComponent},
  {path: 'home', component: TelaHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
