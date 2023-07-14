import { Component, Input } from '@angular/core';
import { ConteudoPaginaService } from 'src/app/pages/conteudo-pagina/service/conteudo-pagina.service';

@Component({
  selector: 'app-modal-excluir',
  templateUrl: './modal-excluir.component.html',
  styleUrls: ['./modal-excluir.component.scss']
})
export class ModalExcluirComponent {

  @Input() titleBook!: string;
  @Input() idBook!: string | undefined;
  @Input() modalId!: string;

  constructor(private conteudoPaginaService: ConteudoPaginaService){}

  deleteBook(){
    this.conteudoPaginaService.removeBook(this.idBook).subscribe({
      next: (res) =>     this.conteudoPaginaService.livroExcluido.emit(this.idBook),
      error: (err) => console.log(err),
    });
  }

}
