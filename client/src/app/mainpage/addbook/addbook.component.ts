import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../services/books.service';
import { Book } from '../../../models/book';
import { Router } from '@angular/router';
import {Observable} from "rxjs/Observable";

const URL = 'http://localhost:3000/api/uploadbook';

@Component({
  selector: 'addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  book = new Book ();

  statusValue : boolean;

  statuses : boolean[] = [true,false];

  constructor(private bookService : BooksService,private router: Router) {




  }

  ngOnInit() {

  }

  submitBook(){
  this.book.status = this.statusValue;
  this.book.token = localStorage.token;
  this.book.creatorid = localStorage.userid;
    this.bookService.postBook(this.book)
      .subscribe( responce => {
        if(responce.status == 200){
          this.router.navigate(['/home','bookslist']);
        }
      });
  }




}
