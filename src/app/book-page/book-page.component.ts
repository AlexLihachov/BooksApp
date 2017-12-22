import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {
  title: string;
  summary: string;
  author: string;
  genre: string;

  constructor(private ar: ActivatedRoute, private booksService: BooksService) {
  }

  ngOnInit() {
    const param = this.ar.snapshot.params['title'];

    this.booksService.getBookByTitle(param).subscribe((elem) => {
      this.title = elem.title;
      this.author = elem.author;
      this.summary = elem.summary;
      this.genre = elem.genre;
    });
  }
}
