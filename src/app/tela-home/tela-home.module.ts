import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ConteudoPaginaComponent } from './conteudo-pagina/conteudo-pagina.component';



@NgModule({
  declarations: [ HeaderComponent, SideBarComponent, ConteudoPaginaComponent],
  imports: [
    CommonModule
  ], exports: [
    HeaderComponent, SideBarComponent, ConteudoPaginaComponent
  ]
})
export class TelaHomeModule { }
