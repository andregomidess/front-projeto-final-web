import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Book } from '../../../models/Book.model';

@Injectable({
  providedIn: 'root'
})
export class ConteudoPaginaService {

  constructor(private http: HttpClient) { }

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


}
