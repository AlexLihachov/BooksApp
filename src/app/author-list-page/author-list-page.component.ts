import {Component, OnInit} from '@angular/core';
import {AuthorsService} from '../authors.service';

@Component({
  selector: 'app-author-list-page',
  templateUrl: './author-list-page.component.html',
  styleUrls: ['./author-list-page.component.scss']
})
export class AuthorListPageComponent implements OnInit {
  authors;

  constructor(private authorsService: AuthorsService) {
  }

  ngOnInit() {
    this.authorsService.getAuthors().subscribe(authors => {
      this.authors = authors;
    });
  }
}
