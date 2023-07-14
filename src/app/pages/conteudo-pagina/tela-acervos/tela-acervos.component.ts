import { Component, OnInit } from '@angular/core';
import { ConteudoPaginaService } from '../service/conteudo-pagina.service';
import { map } from 'rxjs';
import { Book } from 'src/app/models/Book.model';

@Component({
  selector: 'app-tela-acervos',
  templateUrl: './tela-acervos.component.html',
  styleUrls: ['./tela-acervos.component.scss']
})
export class TelaAcervosComponent implements OnInit {

  constructor(private conteudoPaginaService: ConteudoPaginaService) {}
  allBooks!: Book[];

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.conteudoPaginaService.getAllBooks()
    .subscribe({
      next: (res) => {
        const book: any = res;
        const {books} = book;
        this.allBooks = books
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

}
