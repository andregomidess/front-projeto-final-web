import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, take } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Book } from '../../../models/Book.model';

@Injectable({
  providedIn: 'root'
})
export class ConteudoPaginaService {

  constructor(private http: HttpClient) { }

  livroExcluido: EventEmitter<string> = new EventEmitter<string>();
  livroatualizado: EventEmitter<any> = new EventEmitter<any>();


  getAllBooks(){
    return this.http.get(`${environment.api}/books/`).pipe(
      take(1)
    );
  }

  createBook(book: any){
    return this.http.post<Book>(`${environment.api}/books/create`, book).pipe(
      take(1)
    );
  }

  removeBook(id: any){
    return this.http.delete<Book>(`${environment.api}/books/${id}`).pipe(take(1));
  }

  getBookById(id: any){
    return this.http.get<any>(`${environment.api}/books/${id}`).pipe(take(1));
  }

  editBook(book: any, id: any){
    return this.http.patch<Book>(`${environment.api}/books/${id}`, book).pipe(take(1));
  }


}
