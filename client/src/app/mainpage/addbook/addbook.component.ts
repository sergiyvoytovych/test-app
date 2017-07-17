import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../services/books.service';
import { Book } from '../../../models/book';
import { Router } from '@angular/router';
import {Observable} from "rxjs/Observable";
import { FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  book = new Book ();

  statuses : boolean[] = [true,false];

  public uploader:FileUploader = new FileUploader({url:'http://localhost:3000/api/upload'});

  constructor(private bookService : BooksService,private router: Router) {
    this.uploader.onSuccessItem = this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
  }

  ngOnInit() {

  }

  submitBook(){
    this.bookService.postBook(this.book)
      .subscribe( responce => {
        if(responce.status == 200){
          this.router.navigate(['/home','bookslist']);
        }
      });
  }

  onSuccessItem(item, response, status, headers){
    response = JSON.parse(response);
    this.book.url = response.data.filename;
    this.book.token = localStorage.token;
    this.book.creatorid = localStorage.userid;
    this.submitBook();
  }
}
