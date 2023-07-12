import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-float',
  templateUrl: './input-float.component.html',
  styleUrls: ['./input-float.component.scss']
})
export class InputFloatComponent {

  @Input() tipoInput: string = 'text';
  @Input() textoPlaceHolder: string = 'E-mail';
  @Input() form!: FormGroup;
  @Input() controlName = '';

}
