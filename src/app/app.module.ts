import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TelaHomeComponent } from './pages/tela-home/tela-home.component';
import { TelaHomeModule } from './pages/tela-home/tela-home.module';
import { TelaLoginComponent } from './pages/tela-login/tela-login.component';
import { TelaLoginModule } from './pages/tela-login/tela-login.module';
import { TelaCadastrarComponent } from './pages/tela-cadastrar/tela-cadastrar.component';
import { CadastraAcervoComponent } from './pages/tela-cadastrar/cadastra-acervo/cadastra-acervo.component';
import { ListaAcervosComponent } from './pages/tela-cadastrar/lista-acervos/lista-acervos.component';


@NgModule({
  declarations: [
    AppComponent,
   TelaLoginComponent,
    TelaHomeComponent,
    TelaCadastrarComponent,
    CadastraAcervoComponent,
    ListaAcervosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TelaLoginModule,
    TelaHomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
