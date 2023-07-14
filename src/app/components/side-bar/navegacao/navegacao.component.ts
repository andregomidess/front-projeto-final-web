import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { ConteudoPaginaService } from 'src/app/pages/conteudo-pagina/service/conteudo-pagina.service';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent {

  selectedItem: string = '';
  @Input() userData!: User;


  constructor(public conteudoPaginaService: ConteudoPaginaService) {}

  changeBackgroundColor(item: string) {
    this.selectedItem = item;
  }

  



}
