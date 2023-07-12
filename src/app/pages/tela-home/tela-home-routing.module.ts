import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaHomeComponent } from './tela-home.component';
;

const routes: Routes = [
  {path: 'home', component: TelaHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelaHomeRoutingModule { }
