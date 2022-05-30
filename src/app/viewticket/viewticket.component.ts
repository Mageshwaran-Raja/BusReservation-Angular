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
 alert:boolean=false;
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
      this.busticket=this.li;
      console.log(+this.busticket)
    });
  }

  cancelTicket(tick:ViewTicket) {
    this.http.delete('https://localhost:5001/api/BusDetails/cancelticket/'+this.lgdata.userid+'/'+ tick.busNumber)
        .subscribe(() => this.status = 'Delete successful');
    this.alert = true
  }

  updatePayment(tick:ViewTicket) {
    const headers = { 'content-type': 'text/plain'}; 
    const body=JSON.stringify(tick);
    console.log("called")
    this.http.put<any>('https://localhost:5001/api/BusDetails/'+this.lgdata.userid+'/'+tick.busNumber, body, 
    {'headers': headers}).subscribe(data=>{console.log(data)});
    this.router.navigate(['Dashboard'])
  }



}
