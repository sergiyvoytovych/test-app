import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../services/books.service';
import { Book } from '../../../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})

export class EditbookComponent implements OnInit {

  book : Book = new Book;

  statuses : boolean[] = [true,false];

  public uploader:FileUploader = new FileUploader({url:'http://localhost:3000/api/upload'});

  constructor(private booksService : BooksService,private router: Router,private route : ActivatedRoute) {
    this.uploader.onSuccessItem = this.uploader.onSuccessItem = (item, response) => this.onSuccessItem(item, response);
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
    if (!this.uploader.getNotUploadedItems().length){
    this.booksService.updateBook(this.book)
      .subscribe(responce => {
        if(responce.status == 200){
          this.router.navigate(['/home','bookslist']);
        }
      })
  } else {
      this.uploader.uploadAll();
    }
  }

  onSuccessItem(item, response){
    response = JSON.parse(response);
    this.book.url = response.data.filename;
    this.updateBook();
  }

}
