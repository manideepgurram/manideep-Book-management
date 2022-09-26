import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogModel,
} from '../confirmation-dailog/confirmation-dailog.component';

@Component({
  selector: 'app-existing-books',
  templateUrl: './existing-books.component.html',
  styleUrls: ['./existing-books.component.scss'],
})
export class ExistingBooksComponent implements OnInit {
  books: any = [];
  result: string = '';
  constructor(public bookService: BookService, public dialog: MatDialog) {}

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
  confirmDialog(id: any): void {
    const message = `Do you want to delete this book?`;

    const dialogData = new ConfirmationDialogModel('Are you Sure', message);

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      maxWidth: '600px',
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      this.result = dialogResult;
      console.log(this.result, 'result');

      if (this.result) {
        this.deleteBook(id);
      }
    });
  }
}
