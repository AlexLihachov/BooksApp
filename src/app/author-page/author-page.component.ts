import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthorsService} from '../authors.service';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.scss']
})
export class AuthorPageComponent implements OnInit {
  name: string;
  biography: string;
  books: any[];

  constructor(private ar: ActivatedRoute, private authorsService: AuthorsService, private booksService: BooksService) {
  }

  ngOnInit() {
    const param = this.ar.snapshot.params['author'];

    this.authorsService.getAuthor(param).subscribe((elem) => {
      this.name = elem.name;
      this.biography = elem.biography;
    });

    this.booksService.getBooksByAuthor(param).subscribe(
      (elem) => this.books = elem);
  }
}
