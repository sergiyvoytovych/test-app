import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  username: String;

  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit() {
    this.verify();
  }

  logout(){
    this.auth.logout();
    this.router.navigate(["auth"]);
  }

  verify(){
    this.auth.verify()
      .subscribe( (response) =>{
        if(response.json().succsess == true) {
          localStorage.setItem('userid', response.json().msg._doc._id);
          localStorage.setItem('username', response.json().msg._doc.email);
          this.username = localStorage.username;
          this.router.navigate(["home","bookslist"]);
        } else {
          localStorage.clear();
          this.router.navigate(["auth"]);
        }
      })
  }

}
