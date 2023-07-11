import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-cadastro',
  templateUrl: './input-cadastro.component.html',
  styleUrls: ['./input-cadastro.component.scss']
})
export class InputCadastroComponent {
  @Input() tipoInput: string = 'text';
  @Input() textoPlaceHolder: string = 'E-mail';
}
