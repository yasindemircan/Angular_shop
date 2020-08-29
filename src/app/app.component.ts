import { Component } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private accountService:AccountService){}
  title = 'shop2';

  isLoggedin(){
    return this.accountService.isLoggedIn();
  }
  logOut(){
   return this.accountService.logOut();
  }
}
