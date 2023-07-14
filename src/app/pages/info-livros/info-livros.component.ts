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
  msg: boolean = false;
  showMessage: boolean = false;
  message: string = '';

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
      next: () => {
        this.showMessage = true;
        this.message = 'Livro adicionado aos favoritos!';

        setTimeout(() => {
          // Ocultar a mensagem após 3 segundos
          this.showMessage = false;
        }, 3000);
      },
      error: (err) => {
        console.log(err);
      }
    });
    this.appendAlert('Livro Favoritado com Sucesso', 'success');
  }

  appendAlert(message: string, type: string) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <div class="alert alert-${type} alert-dismissible" role="alert">
        <div>${message}</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
  
    const container = document.querySelector('.container');
    if (container instanceof Element && wrapper.firstElementChild) {
      container.insertAdjacentElement('beforebegin', wrapper.firstElementChild);
    }
  }

  getStarRange(rating: number | undefined): number[] {
    if (rating === undefined) {
      return [];
    }
    return Array(Math.floor(rating));
  }

  getEmptyStarRange(rating: number | undefined): number[] {
    if (rating === undefined) {
      return [];
    }
    return Array(5 - Math.floor(rating));
  }

}
