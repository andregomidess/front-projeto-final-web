import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TelaHomeComponent } from './pages/tela-home/tela-home.component';
import { TelaHomeModule } from './pages/tela-home/tela-home.module';
import { TelaLoginComponent } from './pages/tela-login/tela-login.component';
import { TelaLoginModule } from './pages/tela-login/tela-login.module';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
import { InfoLivrosComponent } from './pages/info-livros/info-livros.component';
=======
import { TelaCadastrarComponent } from './pages/tela-cadastrar/tela-cadastrar.component';
import { CadastraAcervoComponent } from './pages/tela-cadastrar/cadastra-acervo/cadastra-acervo.component';
import { ListaAcervosComponent } from './pages/tela-cadastrar/lista-acervos/lista-acervos.component';
>>>>>>> 47243289e4224e79690216a612ed80922aefc273


@NgModule({
  declarations: [
    AppComponent,
   TelaLoginComponent,
    TelaHomeComponent,
<<<<<<< HEAD
    InfoLivrosComponent,
=======
    TelaCadastrarComponent,
    CadastraAcervoComponent,
    ListaAcervosComponent,
>>>>>>> 47243289e4224e79690216a612ed80922aefc273
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TelaLoginModule,
    TelaHomeModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
