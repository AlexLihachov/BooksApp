import {Component, OnInit, Input} from '@angular/core';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.scss']
})
export class AuthorCardComponent implements OnInit {
  @Input() author;
  books: any[];

  constructor(private booksService: BooksService) {
  }

  ngOnInit() {
    this.booksService.getBooksByAuthor(this.author.name).subscribe(
      (elem) => this.books = elem);
  }

}
