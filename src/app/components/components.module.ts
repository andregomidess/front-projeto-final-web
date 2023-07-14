import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PerfilComponent } from './side-bar/perfil/perfil.component';
import { NavegacaoComponent } from './side-bar/navegacao/navegacao.component';
import { InputFloatComponent } from './input-float/input-float.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalExcluirComponent } from './modal-excluir/modal-excluir.component';
import { ModalEditarComponent } from './modal-editar/modal-editar.component';
import { ModalEditarPrefilComponent } from './modal-editar-prefil/modal-editar-prefil.component';



@NgModule({
  declarations: [HeaderComponent, SideBarComponent, PerfilComponent, NavegacaoComponent, InputFloatComponent, ModalExcluirComponent, ModalEditarComponent, ModalEditarPrefilComponent],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule
  ],
  exports: [HeaderComponent, SideBarComponent, InputFloatComponent, ModalExcluirComponent, ModalEditarComponent, ModalEditarPrefilComponent]
})
export class ComponentsModule { }
