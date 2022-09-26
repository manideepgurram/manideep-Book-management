import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import Book from '../entity/book';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.scss'],
})
export class BookformComponent implements OnInit {
  book: Book = new Book(
    'eh dil mangamore',
    'mani',
    'emotion',
    'VCC',
    700,
    '2021-09-23'
  );
  books: any = [];
  constructor(public bookService: BookService) {}
  ngOnInit(): void {
    this.getBooks();
  }
  getBooks() {
    const observable = this.bookService.getBooks();
    observable.subscribe((books) => {
      this.books = books;
    });
  }
  //DeleteUser
  deleteBook(id: number) {
    const observable = this.bookService.deleteBook(id);
    observable.subscribe((response) => {
      this.getBooks();
    });
  }
}
