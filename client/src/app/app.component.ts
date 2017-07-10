import { Component } from '@angular/core';
import { AuthtentificateComponent } from './authtentificate/authtentificate.component';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [AuthService]
})

export class AppComponent {

}
