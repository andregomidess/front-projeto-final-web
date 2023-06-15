import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TelaHomeComponent } from './pages/tela-home/tela-home.component';
import { TelaHomeModule } from './pages/tela-home/tela-home.module';
import { TelaLoginComponent } from './pages/tela-login/tela-login.component';
import { TelaLoginModule } from './pages/tela-login/tela-login.module';

@NgModule({
  declarations: [
    AppComponent,
   TelaLoginComponent,
    TelaHomeComponent,
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
