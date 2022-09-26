import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookformComponent } from './bookform/bookform.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CreateBooksComponent } from './create-books/create-books.component';
import { ExistingBooksComponent } from './existing-books/existing-books.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReaderbookformComponent } from './readerbookform/readerbookform.component';
import { ReaderbooklistComponent } from './readerbooklist/readerbooklist.component';
import { BookService } from './book.service';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationDialogComponent } from './confirmation-dailog/confirmation-dailog.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [{ path: 'bookform', component: BookformComponent }];
@NgModule({
  declarations: [
    AppComponent,
    BookformComponent,
    CreateBooksComponent,
    ExistingBooksComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ReaderbookformComponent,
    ReaderbooklistComponent,
    ConfirmationDialogComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDatepickerModule,
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent],
})
export class AppModule {}
