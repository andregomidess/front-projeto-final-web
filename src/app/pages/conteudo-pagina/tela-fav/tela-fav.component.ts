import { Component, OnInit } from '@angular/core';
import { ConteudoPaginaService } from '../service/conteudo-pagina.service';
import { Book } from 'src/app/models/Book.model';

@Component({
  selector: 'app-tela-fav',
  templateUrl: './tela-fav.component.html',
  styleUrls: ['./tela-fav.component.scss']
})
export class TelaFavComponent implements OnInit {

  favBooks: any;

  constructor(private conteudoPaginaService: ConteudoPaginaService) {}

  ngOnInit(): void {
    this.getFavBooksUser();
  }

  getFavBooksUser(){
    this.conteudoPaginaService.getFavoriteBooksUser().subscribe({
      next: (res) => {
        this.favBooks = res;
        console.log(this.favBooks);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }



}
