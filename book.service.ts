import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Book from './entity/book';
const API_URL = 'http://localhost:9000/digitalbooks/';
const API_Register ='http://localhost:9000/api/auth/signup'
const API_Login='http://localhost:9000/api/auth/signin'

@Injectable({
  providedIn: 'root',
})
export class BookService {

  login(data: any) {
    return this.client.post(API_Login, data);
  }
  http: any;
  register(data: any) {
    return this.client.post(API_Register, data);
  }
  constructor(public client: HttpClient) {}

  deleteBook(id: number) {
    return this.client.delete(API_URL + id);
  }
  //ngonit method
  getBooks() {
    return this.client.get(API_URL);
  }

  saveUser(book: Book) {
    return this.client.post(API_URL, book);
  }
  Purchase(book:any){
    return this.client.post("http://localhost:9000/digitalbooks/buy",book)
  }
}
