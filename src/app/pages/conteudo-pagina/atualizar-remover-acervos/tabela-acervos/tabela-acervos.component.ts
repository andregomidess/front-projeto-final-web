import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela-acervos',
  templateUrl: './tabela-acervos.component.html',
  styleUrls: ['./tabela-acervos.component.scss']
})
export class TabelaAcervosComponent {

  verificaCor: boolean = true;

  divStyle = {
    backgroundColor: '#00D68F',
    text: 'Contratado'
  };

  // Função para alterar o estilo da div
  alterarEstilo() {
    this.verificaCor = !this.verificaCor;
    if (this.verificaCor){
      this.divStyle.backgroundColor = '#00D68F';
      this.divStyle.text = 'Contratado';
    }else{
      this.divStyle.backgroundColor = 'red';
      this.divStyle.text = 'Desligado';
    }

  }

}
