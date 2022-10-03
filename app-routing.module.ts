import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookformComponent } from './bookform/bookform.component';
import { CreateBooksComponent } from './create-books/create-books.component';
import { ExistingBooksComponent } from './existing-books/existing-books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReaderbookformComponent } from './readerbookform/readerbookform.component';
import { ReaderbooklistComponent } from './readerbooklist/readerbooklist.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'bookform', component: BookformComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'create-books',
    component: CreateBooksComponent,
  },
  {
    path: 'existing-books',
    component: ExistingBooksComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'readerbookform',
    component: ReaderbookformComponent,
  },
  {
    path: 'readerbooklist',
    component: ReaderbooklistComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
