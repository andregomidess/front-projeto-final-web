import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PerfilComponent } from './side-bar/perfil/perfil.component';
import { NavegacaoComponent } from './side-bar/navegacao/navegacao.component';
import { InputFloatComponent } from './input-float/input-float.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, SideBarComponent, PerfilComponent, NavegacaoComponent, InputFloatComponent],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule
  ],
  exports: [HeaderComponent, SideBarComponent, InputFloatComponent]
})
export class ComponentsModule { }
