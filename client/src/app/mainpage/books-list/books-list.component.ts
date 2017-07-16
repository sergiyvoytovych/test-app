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

  titleSortTriger: boolean ;
  authorSortTriger: boolean;
  statusSortTriger: boolean;

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

  sortByTitle(){
    if (this.titleSortTriger == false){
      this.books.sort(byTitle).reverse();
      this.titleSortTriger = true;
    } else {
      this.books.sort(byTitle);
      this.resetTriger();
      this.titleSortTriger = false;
    }

    function byTitle(a,b){
      if (a.title < b.title)
        return -1;
      if (a.title > b.title)
        return 1;
      return 0;
    }
  }

  sortByAuthor(){
    if (this.authorSortTriger == false){
      this.books.sort(byAuthor).reverse();
      this.authorSortTriger = true;
    } else {
      this.books.sort(byAuthor);
      this.resetTriger();
      this.authorSortTriger = false;
    }

    function byAuthor(a,b){
      if (a.author < b.author)
        return -1;
      if (a.author > b.author)
        return 1;
      return 0;
    }
  }

  sortByStatus(){
    if (this.statusSortTriger == false){
      this.books.sort(byStatus).reverse();
      this.statusSortTriger = true;
    } else {
      this.books.sort(byStatus);
      this.resetTriger();
      this.statusSortTriger = false;
    }

    function byStatus(a,b){
      if (a.status < b.status)
        return -1;
      if (a.status > b.status)
        return 1;
      return 0;
    }
  }

  resetTriger(){
    this.titleSortTriger = null;
    this.authorSortTriger = null;
    this.statusSortTriger = null;
  }

}
