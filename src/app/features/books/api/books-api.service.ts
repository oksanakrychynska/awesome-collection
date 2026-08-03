import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BooksApiService  {
  private readonly http = inject(HttpClient);

  getBooks() {
    return this.http.get<Book[]>('./books.json');
  }
}
