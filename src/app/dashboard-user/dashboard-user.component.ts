import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { LoginService } from '../login.service';
import { Ilogin } from '../Models/login';
import { register } from '../Models/register';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {
  lgdata:Ilogin={userid:"",password:""}
  li:any;
  userdata:register={custid:"",name:"",password:"",contactNumber:"",eMail:""}
  constructor(private router: Router,private logservice: LoginService, private http : HttpClient) { 
    this.lgdata = logservice.getuserdata()
    
    
  }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/BusDetails/getUser?userid='+this.lgdata.userid)
    .subscribe(Response => {
      if(Response){ 
      }
      //console.log(Response)
      this.li=Response;
      this.userdata=this.li;
      console.log(this.userdata)
    });
  }

  viewavailablebus() {
    this.router.navigate(['Bus']);
  }
  viewmyticket() {
    this.router.navigate(['ViewTicket']);
  }

}
