import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TelaHomeComponent } from './pages/tela-home/tela-home.component';
import { TelaHomeModule } from './pages/tela-home/tela-home.module';
import { TelaLoginComponent } from './pages/tela-login/tela-login.component';
import { TelaLoginModule } from './pages/tela-login/tela-login.module';
import { RouterModule } from '@angular/router';
import { InfoLivrosComponent } from './pages/info-livros/info-livros.component';


@NgModule({
  declarations: [
    AppComponent,
   TelaLoginComponent,
    TelaHomeComponent,
    InfoLivrosComponent,
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
