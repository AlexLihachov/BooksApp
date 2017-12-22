import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {BooksService} from './books.service';
import {AuthorsService} from './authors.service';

import {BooksListPageComponent} from './books-list-page/books-list-page.component';
import {AuthorListPageComponent} from './author-list-page/author-list-page.component';
import {GenresPageComponent} from './genres-page/genres-page.component';


import {BookCardComponent} from './book-card/book-card.component';
import {BookPageComponent} from './book-page/book-page.component';
import {AuthorPageComponent} from './author-page/author-page.component';
import {AuthorCardComponent} from './author-card/author-card.component';


const routes: Routes = [
  {path: '', component: BooksListPageComponent},
  {path: 'books', component: BooksListPageComponent},
  {path: 'authors', component: AuthorListPageComponent},
  {path: 'books/:title', component: BookPageComponent},
  {path: 'authors/:author', component: AuthorPageComponent},
  {path: 'genres', component: GenresPageComponent},
  {path: 'genres/:type', component: BooksListPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    GenresPageComponent,
    BookPageComponent,
    BooksListPageComponent,
    AuthorListPageComponent,
    AuthorPageComponent,
    AuthorCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    BooksService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
