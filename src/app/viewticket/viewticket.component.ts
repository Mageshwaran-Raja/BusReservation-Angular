import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Ilogin } from '../Models/login';
import { ViewTicket } from '../Models/ViewTicket';

@Component({
  selector: 'app-viewticket',
  templateUrl: './viewticket.component.html',
  styleUrls: ['./viewticket.component.css']
})
export class ViewticketComponent implements OnInit {
  lgdata:Ilogin={userid:"",password:""}
  ticket:ViewTicket={customerid:"", name:"", busNumber:"", departureStation:"", destination:"", 
departureDate:"", typeofTravel:"", returnDate:"", paymentStatus:"", seatsBooked:0}
 busticket:ViewTicket[]=[];
 li:any;
 status:string="";
  constructor(private router: Router,private logservice: LoginService, private http : HttpClient) {
    this.lgdata = logservice.getuserdata()
    console.log(this.lgdata)
   }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/BusDetails/getTicketDetails?userid='+this.lgdata.userid)
    .subscribe(Response => {
      if(Response){ 
      }
      console.log("response: " +Response)
      this.li=Response;
      this.ticket=this.li;
      console.log(+this.ticket)
    });
  }

  cancelTicket() {
    this.http.delete('https://localhost:5001/api/BusDetails/cancelticket/'+this.lgdata.userid+'/'+ this.ticket.busNumber)
        .subscribe(() => this.status = 'Delete successful');
  }



}
