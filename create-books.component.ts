import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import Book from '../entity/book';

@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.scss'],
})
export class CreateBooksComponent implements OnInit {
  title: string = '';
  author: string = '';
  category: string = '';
  publisher: string = '';
  price: any = '';
  dateofPublished: any = '';
  book: Book = new Book(
    this.title,
    this.author,
    this.category,
    this.publisher,
    this.price,
    this.dateofPublished
  );

  constructor(public bookService: BookService, private route: Router) {}

  ngOnInit(): void {}
  save() {
    console.log('clicked');
  
      const observable = this.bookService.saveUser(this.book);
      observable.subscribe((response) => {
        console.log(response);
        this.route.navigateByUrl('/existing-books');
      });
   
  }
}
