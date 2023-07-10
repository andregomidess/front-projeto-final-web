import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PerfilComponent } from './side-bar/perfil/perfil.component';
import { NavegacaoComponent } from './side-bar/navegacao/navegacao.component';



@NgModule({
  declarations: [HeaderComponent, SideBarComponent, PerfilComponent, NavegacaoComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, SideBarComponent]
})
export class ComponentsModule { }
