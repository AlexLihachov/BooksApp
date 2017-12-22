import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';


@Injectable()

export class BooksService {
  constructor(private http: HttpClient) {
  }

  getBooks() {
    return this.http.get('https://gist.githubusercontent.com/AlexLihachov/0b9fd188e8dce7adf1706fd5a807c022/raw/d63a1755d7c6d0fed3ee1bdda0b131a32d202d12/books.json');
  }

  getBooksByAuthor(name: string) {
    return this.getBooks().map((res: any[]) => {
      return res.filter((arr) => {
        return arr.author === name;
      });
    });
  }

  getBooksByGenre(genre: string) {
    return this.getBooks().map((res: any[]) => {
      return res.filter((arr) => {
        return arr.genre === genre;
      });
    });
  }

  getBookByTitle(title: string) {
    return this.getBooks().map((res: any[]) => {
      return res.find((arr) => {
        return arr.title === title;
      });
    });
  }
}
