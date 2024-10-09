import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:8000/api-book/books.php'; // URL da sua API

  constructor(private http: HttpClient) {}

  // Método para obter todos os livros
  getBooks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para adicionar um novo livro
  addBook(book: { title: string; author: string }): Observable<any> {
    return this.http.post(this.apiUrl, book);
  }

}
