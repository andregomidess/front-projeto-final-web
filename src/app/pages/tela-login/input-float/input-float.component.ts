import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-float',
  templateUrl: './input-float.component.html',
  styleUrls: ['./input-float.component.scss']
})
export class InputFloatComponent {

  @Input() tipoInput: string = 'text';
  @Input() textoPlaceHolder: string = 'E-mail';

}
