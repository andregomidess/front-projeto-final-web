import { Book } from '../../../../models/Book.model';
import { ConteudoPaginaService } from './../../service/conteudo-pagina.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-acervos',
  templateUrl: './tabela-acervos.component.html',
  styleUrls: ['./tabela-acervos.component.scss']
})
export class TabelaAcervosComponent implements OnInit {

vernome(arg0: any) {
  console.log(arg0);
}

  verificaCor: boolean = true;
  allBooks!: Book[];

  divStyle = {
    backgroundColor: '#00D68F',
    text: 'Contratado'
  };

  constructor(private conteudoPaginaService: ConteudoPaginaService) {}

  ngOnInit(): void {
    this.getAllBooks();

    this.conteudoPaginaService.livroExcluido.subscribe((bookId: string) => {
      this.allBooks = this.allBooks.filter(book => book._id !== bookId);
    });


    this.conteudoPaginaService.livroatualizado.subscribe((updatedFields: { _id: string, fields: any }) => {
      const updatedBook = this.allBooks.find(book => book._id === updatedFields._id);
      if (updatedBook) {
        // Atualizar apenas os campos relevantes
        Object.assign(updatedBook, updatedFields.fields);
      }
    });
  }


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

  getAllBooks(){
    return this.conteudoPaginaService.getAllBooks().subscribe({
      next: (res) => {
        const book: any = res;
        const {books} = book;
        this.allBooks = books
      }
    })
  }

}
