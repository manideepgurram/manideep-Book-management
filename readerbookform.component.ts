import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-readerbookform',
  templateUrl: './readerbookform.component.html',
  styleUrls: ['./readerbookform.component.scss'],
})
export class ReaderbookformComponent implements OnInit {
  username: any;
  email: any;
  constructor(private http: HttpClient) {}
  response: any;

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
    this.buybooks();
  }
  buybooks() {
    const data = {
      username: this.username,
    };
    this.http
      .post(
        'http://localhost:9000/digitalbooks/readers/' + this.email + '/books',
        data,
        { responseType: 'text' }
      )
      .subscribe((res) => {
        console.log(res);
        this.response = res;
        console.log(this.response.id);
      });
  }
}
