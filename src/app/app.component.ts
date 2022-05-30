import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BusReservation';
  islogin:boolean=false;
  constructor(private auth: AuthService) {
    if(auth.isLoggedIn() == true) {
      this.islogin = true;
    }
  }
}

