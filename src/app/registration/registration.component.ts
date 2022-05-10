import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { register } from '../Models/register';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 reg:register={custid:"",name:"",password:"",contactNumber:"",eMail:""};
 baseURL: string = "https://localhost:5001/api/BusDetails/add-user";
 showDiv = {next:false};
  constructor(private http : HttpClient,private router: Router) { }
  confirmPassword:string="";
  ngOnInit(): void {
  }
  addUser(adduser:register): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(adduser);
    console.log(body)
    return this.http.post(this.baseURL, body,{'headers':headers})
  
  }
  addUserDetails() {
    this.addUser(this.reg)
      .subscribe(data => {
        console.log(data)
      })      
  }

 login() {
   this.router.navigate(['Login'])
 }

  
}
