import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-books-list-page',
  templateUrl: './books-list-page.component.html',
  styleUrls: ['./books-list-page.component.scss']
})
export class BooksListPageComponent implements OnInit {

  books;

  constructor(private booksService: BooksService, private ar: ActivatedRoute) {
  }

  ngOnInit() {
    const param = this.ar.snapshot.params['type'];

    if (!param) {
      this.booksService.getBooks().subscribe(books => this.books = books);
    } else {
      this.booksService.getBooksByGenre(param).subscribe(books => this.books = books);
    }

  }
}
