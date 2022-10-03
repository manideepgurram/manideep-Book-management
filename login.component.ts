import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  response: any;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  success: any;
  constructor(
    private router: Router,
    private bookService: BookService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    this.bookService.login(this.form.value).subscribe(
      (res) => {
        this.response = res;
        this.success = true;
        localStorage.setItem('email', this.response.email);
        localStorage.setItem('username', this.response.username);
        localStorage.setItem('loggedin', 'true');
        if (this.response.roles[0] == 'AUTHOR') {
          this.router.navigateByUrl('/bookform');
        } else {
          this.router.navigateByUrl('/readerbooklist');
        }
      },
      (err) => {
        console.log(err);
        this.success = false;
      }
    );
  }
}
