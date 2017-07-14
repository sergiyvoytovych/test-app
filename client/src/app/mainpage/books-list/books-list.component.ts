import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../services/books.service';
import { Book } from '../../../models/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books : Book[];

  showBook : Book;

  constructor(private bookService : BooksService) { }

  ngOnInit() {
    this.loadBooks();
  }

  open(book){
    this.showBook = book;
  }

  deleteBook(id : String){
    this.bookService.deleteBook(id)
      .subscribe( responce => {
        this.loadBooks()
      })
  }

  loadBooks(){
    this.bookService.getBooks()
      .subscribe( responce => {
        this.books = responce.json().data;
      })
  }
}
