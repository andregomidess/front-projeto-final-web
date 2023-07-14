import { Component, OnInit } from '@angular/core';
import { ConteudoPaginaService } from '../conteudo-pagina/service/conteudo-pagina.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/Book.model';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-info-livros',
  templateUrl: './info-livros.component.html',
  styleUrls: ['./info-livros.component.scss']
})
export class InfoLivrosComponent implements OnInit {

  book!: Book;
  urlImage!: string;
  bookId!: string | null;

  constructor(private route: ActivatedRoute, private conteudoPaginaService: ConteudoPaginaService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const bookId = params.get('id');
      console.log(typeof bookId);
      this.bookId = bookId;
      if(bookId){
        this.getBookById(bookId);
      }
    });
    
    
  }

  getBookById(bookId: string){
    this.conteudoPaginaService.getBookById(bookId).subscribe({
      next: (res) => {
        //this.book = book;
        const {book} = res;
        this.book = book;
        this.compareUrlImage();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  compareUrlImage(){
    if (this.book.thumbnail?.startsWith('http')){
      this.urlImage = this.book.thumbnail;
    } else if (this.book.thumbnail) {
      this.urlImage = `${environment.api}/images/book/${this.book.thumbnail}`;
    } else{
      this.urlImage = '../../../assets/images/home/card-livro/capa-padrao.jpg'
    }
  }

  favoriteBook(bookId:any){
    const valor = {
    
      bookId:this.bookId,
    }
    console.log(this.bookId);
    this.conteudoPaginaService.favoriteBook(valor).subscribe({
      next: (res) => {
        console.log(res);
        //this.book = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
