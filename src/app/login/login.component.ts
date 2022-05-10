import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string="";
  password: string="";
  invalid: string="";

  constructor(private router: Router,private http : HttpClient, private lg: LoginService, private auth: AuthService) { }

  ngOnInit(): void {
  }

  login(formdata:any):void
  {
    if(!(formdata.user_name=="admin"&&formdata.pass_word=="admin")) {
      //const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
      const url="https://localhost:5001/api/BusDetails/validateUser?userid="+formdata.user_name+"&password="+formdata.pass_word;
      this.http.get(url, { responseType: 'text' as 'json'})
      .subscribe(Response => {
        console.log(Response)
        if(Response == "User Found") {
          this.lg.userdata(formdata.user_name, formdata.pass_word);
          this.invalid="";
          this.auth.login();
          this.router.navigate(['Dashboard']);
        }
        else if(Response == "Not Found") {
          this.invalid="Invalid Username/Password";
        }
      });
    }
    
    else
    {
      this.lg.userdata(formdata.user_name, formdata.pass_word);
      this.invalid="";
      this.auth.login();
      this.router.navigate(['AdminDashboard']);
    }
  }

  register():void {
    this.router.navigate(['Registration']);
  }
  returndata() {
    return (this.username, this.password);
  }

}
