import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { ConteudoPaginaComponent } from '../conteudo-pagina/conteudo-pagina.component';
import { CardLivroComponent } from '../conteudo-pagina/tela-acervos/card-livro/card-livro.component';
import { ConteudoPaginaModule } from '../conteudo-pagina/conteudo-pagina.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [ConteudoPaginaComponent],
  imports: [
    CommonModule, ConteudoPaginaModule
  ], exports: [
    ConteudoPaginaComponent
  ]
})
export class TelaHomeModule { }
