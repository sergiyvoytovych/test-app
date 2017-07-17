import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-authtentificate',
  templateUrl: './authtentificate.component.html',
  styleUrls: ['./authtentificate.component.css']
})
export class AuthtentificateComponent implements OnInit {

  registerTab : boolean = false;

  duplicatePass : String;

  userData = {
    email : '',
    password : ''
  }

  errorMsg : String;


  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit() {
    if(localStorage.token){
      this.router.navigate(["home"]);
    }
  }

  authenticate(){
    if (this.userData.email && this.userData.password){
      this.auth.login(this.userData)
        .subscribe( response => {
          if (response.json().succsess === true) {
            this.auth.finishAuth(response.json());
            this.router.navigate(["home"]);
          }
          else{
            this.errorMsg = 'Wrong user or password!'
            this.router.navigate(["auth"]);
          }
        });
    }
  }

  register(){
    if (this.userData.email && this.userData.password && (this.userData.password === this.duplicatePass)){
      this.auth.signin(this.userData)
        .subscribe( (response) => {
          if (response.json().succsess == false){
            this.errorMsg = response.json().err;
          } else {
          console.log(response);
          this.auth.finishAuth(response.json());
          this.router.navigate(["home"]);
          }
        } );
    } else {
      this.errorMsg = 'Passwords not match';
    }
  }


}
