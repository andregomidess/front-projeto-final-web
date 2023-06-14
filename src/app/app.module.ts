import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaLoginModule } from './tela-login/tela-login.module';
import { TelaHomeComponent } from './tela-home/tela-home.component';
import { TelaHomeModule } from './tela-home/tela-home.module';

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
