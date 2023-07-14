import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ConteudoPaginaService } from '../service/conteudo-pagina.service';
import { map } from 'rxjs';
import { Book } from 'src/app/models/Book.model';
import { SearchService } from './search-service.component';

@Component({
  selector: 'app-tela-acervos',
  templateUrl: './tela-acervos.component.html',
  styleUrls: ['./tela-acervos.component.scss']
})
export class TelaAcervosComponent implements OnInit, OnChanges {
  
  searchText: string = "";
  constructor(private conteudoPaginaService: ConteudoPaginaService, private searchService: SearchService) {}
  filteredBooks: any[] = [];
  allBooks!: Book[];
  resultados: boolean = true;

  filterBooks(searchText: string) {
    if (searchText.length === 0) {
      this.resultados = true; 
    } else {
      this.filteredBooks = this.allBooks.filter(book => {
      const bookTitle = book.title.toLowerCase();
      const searchTerm = searchText.toLowerCase();

    // Verifica se o título do livro contém o texto de busca
    return bookTitle.includes(searchTerm);
    });
    if (this.filteredBooks.length === 0) {
      this.resultados = false; 
    }
    }
    
  }
  ngOnInit(): void {
    this.getBooks();
    this.searchService.searchText$.pipe(
      map(searchText => searchText.toLowerCase())
    ).subscribe(searchText => {
      this.filterBooks(searchText);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.filterBooks(this.searchText);
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
