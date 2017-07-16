import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';

import {routes} from './app.routes'

import { MaterializeModule } from "angular2-materialize";
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { AuthtentificateComponent } from './authtentificate/authtentificate.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { BooksListComponent } from './mainpage/books-list/books-list.component';
import { AddbookComponent } from './mainpage/addbook/addbook.component';
import { EditbookComponent } from './mainpage/editbook/editbook.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthtentificateComponent,
    MainpageComponent,
    BooksListComponent,
    AddbookComponent,
    EditbookComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
