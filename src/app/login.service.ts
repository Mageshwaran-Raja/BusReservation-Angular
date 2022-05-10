import { Injectable } from '@angular/core';
import { Ilogin } from './Models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login:Ilogin={userid:"", password:""};
  constructor() { }

  userdata(uid:"", pass:""):void{
    this.login.userid = uid;
    this.login.password = pass;
  }

  getuserdata() {
    return this.login;
  }
}
