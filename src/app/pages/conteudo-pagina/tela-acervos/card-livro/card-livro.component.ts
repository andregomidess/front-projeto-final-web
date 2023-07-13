import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/Book.model';

@Component({
  selector: 'app-card-livro',
  templateUrl: './card-livro.component.html',
  styleUrls: ['./card-livro.component.scss']
})
export class CardLivroComponent {

  @Input() bookData!: Book;

}
