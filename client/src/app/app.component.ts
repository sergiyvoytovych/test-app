import { Component } from '@angular/core';
import { AuthtentificateComponent } from './authtentificate/authtentificate.component';
import {AuthService} from "../services/auth.service";
import {BooksService} from "../services/books.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [AuthService, BooksService]
})

export class AppComponent {

}
