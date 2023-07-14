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
import { ComponentsModule } from './components/components.module';
import { TelaCadastroComponent } from './pages/tela-cadastro/tela-cadastro.component';
import { TelaCadastroModule } from './pages/tela-cadastro/tela-cadastro.module';
import { AuthService } from './shared/auth.service';
import { httpInterceptorProviders } from './interceptor';
import { HttpClientModule } from '@angular/common/http';
import { ConteudoPaginaService } from './pages/conteudo-pagina/service/conteudo-pagina.service';




@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaHomeComponent,
    InfoLivrosComponent,
    TelaCadastroComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TelaLoginModule,
    TelaHomeModule,
    RouterModule,
    TelaCadastroModule,
    HttpClientModule,
    ComponentsModule
    
  ],
  providers: [AuthService, httpInterceptorProviders, ConteudoPaginaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
