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
    this.urlImage = `${environment.api}/images/books/${this.bookData.thumbnail}`;
  }

}
