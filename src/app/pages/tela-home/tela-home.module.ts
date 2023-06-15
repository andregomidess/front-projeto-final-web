import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ConteudoPaginaComponent } from './conteudo-pagina/conteudo-pagina.component';
import { CardLivroComponent } from './conteudo-pagina/tela-acervos/card-livro/card-livro.component';
import { ConteudoPaginaModule } from './conteudo-pagina/conteudo-pagina.module';



@NgModule({
  declarations: [ HeaderComponent, SideBarComponent, ConteudoPaginaComponent],
  imports: [
    CommonModule, ConteudoPaginaModule
  ], exports: [
    HeaderComponent, SideBarComponent, ConteudoPaginaComponent
  ]
})
export class TelaHomeModule { }
