import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class AuthorsService {
  constructor(private http: HttpClient) {
  }

  getAuthors() {
    return this.http.get('https://gist.githubusercontent.com/AlexLihachov/b1f2a100bef1f825140be562dc5efefd/raw/a8c41f169ea3ba7c29e5dc9b673effc1eec156cb/authors.json');
  }

  getAuthor(name: string) {
    return this.getAuthors().map((res: any[]) => {
      return res.find((arr) => {
        return arr.name === name;
      });
    });
  }
}
