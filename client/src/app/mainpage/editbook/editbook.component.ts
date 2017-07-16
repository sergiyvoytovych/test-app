import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../services/books.service';
import { Book } from '../../../models/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})

export class EditbookComponent implements OnInit {

  book : Book = new Book;

  statuses : boolean[] = [true,false];

  constructor(private booksService : BooksService,private router: Router,private route : ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.getCurentBook(p['id']);
    });

  }

  getCurentBook(id){
    this.booksService.getBook(id)
      .subscribe(responce => {
        this.book = responce.json();
      });
  }

  updateBook(){
    this.booksService.updateBook(this.book)
      .subscribe(responce => {
        if(responce.status == 200){
          this.router.navigate(['/home','bookslist']);
        }
      })
  }

}
