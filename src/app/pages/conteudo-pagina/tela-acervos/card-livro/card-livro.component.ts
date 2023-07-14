import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book.model';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-card-livro',
  templateUrl: './card-livro.component.html',
  styleUrls: ['./card-livro.component.scss']
})
export class CardLivroComponent implements OnInit{

  @Input() bookData!: Book;
  urlImage!: string;


  ngOnInit(): void {
    this.compareUrlImage();
  }

  compareUrlImage(){
    if (this.bookData.thumbnail?.startsWith('http')){
      this.urlImage = this.bookData.thumbnail;
    } else if (this.bookData.thumbnail) {
      this.urlImage = `${environment.api}/images/book/${this.bookData.thumbnail}`;
    } else{
      this.urlImage = '../../../../../assets/images/home/card-livro/capa-padrao.jpg'
    }
  }

}
