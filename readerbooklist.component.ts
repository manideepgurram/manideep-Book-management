import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-readerbooklist',
  templateUrl: './readerbooklist.component.html',
  styleUrls: ['./readerbooklist.component.scss'],
})
export class ReaderbooklistComponent implements OnInit {
  books: any = [];
  username: any;
  login: any;
  email: any;
  id: any;
  constructor(public bookService: BookService, private http: HttpClient) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.login = localStorage.getItem('login');
    this.email = localStorage.getItem('email');
    this.getBooks();
  }
  getBooks() {
    const observable = this.bookService.getBooks();
    observable.subscribe((books) => {
      this.books = books;
    });
  }
  PurchaseBook() {
    const data = {
      bookId: this.id,
      username: this.username,
      useremail: this.email,
    };
    this.http
      .post('http://localhost:9000/digitalbooks/buy', data, {
        responseType: 'text',
      })
      .subscribe(
        (resp) => {
          console.log(data);
          alert('Purchased Successfully');

          console.log(resp);
        },
        (error) => {
          console.log('error', error);
        }
      );
  }
  getID(event: Event, id: any) {
    this.id = id;
    console.log(this.id);
    this.PurchaseBook();
  }
}
