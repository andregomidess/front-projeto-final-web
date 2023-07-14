import { Book } from '../../../../models/Book.model';
import { ConteudoPaginaService } from './../../service/conteudo-pagina.service';
import { Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { map } from 'rxjs';
import { SearchService } from '../../tela-acervos/search-service.component';

@Component({
  selector: 'app-tabela-acervos',
  templateUrl: './tabela-acervos.component.html',
  styleUrls: ['./tabela-acervos.component.scss']
})
export class TabelaAcervosComponent implements OnInit, OnChanges {

  

vernome(arg0: any) {
  console.log(arg0);
}

  verificaCor: boolean = true;
  allBooks!: Book[];

  divStyle = {
    backgroundColor: '#00D68F',
    text: 'Contratado'
  };

  searchText: string = "";
  constructor(private conteudoPaginaService: ConteudoPaginaService, private searchService: SearchService) {}
  filteredBooks: any[] = [];
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
    this.getAllBooks();
    this.searchService.searchText$.pipe(
      map(searchText => searchText.toLowerCase())
    ).subscribe(searchText => {
      this.filterBooks(searchText);
    });
    
    

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

  ngOnChanges(changes: SimpleChanges): void {
    this.filterBooks(this.searchText);
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
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
