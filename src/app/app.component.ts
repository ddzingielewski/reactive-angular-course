import {Component, OnInit} from '@angular/core';
import { LoadingService } from './loading/loading.service';
import { MessagesService } from './messages/messages.service';
import { Auth } from './services/auth.store';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    LoadingService,
    MessagesService
  ]
})
export class AppComponent implements  OnInit {

    constructor(public auth: Auth) {

    }

    ngOnInit() {


    }

  logout() {
    this.auth.logout();
  }

}
