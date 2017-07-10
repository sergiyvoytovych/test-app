import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit() {
    if(!localStorage.token){
      this.router.navigate(["auth"]);
    }
  }

  logout(){
    this.auth.logout();
    this.router.navigate(["auth"]);
  }

}
