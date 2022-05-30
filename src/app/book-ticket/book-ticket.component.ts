import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookticketService } from '../bookticket.service';
import { LoginService } from '../login.service';
import { BusDetails } from '../Models/BusDetails';
import { Ilogin } from '../Models/login';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  baseURL: string = "";
  lgdetails:Ilogin={userid:"",password:""}
  seats:number=0;
  paystatus:string="";
  msg:string="";
  busdet:BusDetails={busNumber:"", source:"", destination:"", departureDate:new Date, travelType:"",
  returnDate:new Date, seatAvailable:0};
  showDiv = {next:false};
  constructor(private bser:BookticketService, private lser: LoginService,private http : HttpClient, private router: Router) { 
    this.busdet = this.bser.getbustickdetails()
    this.lgdetails = this.lser.getuserdata()
  }
 
  ngOnInit(): void {
  }

  bookBusTicket(add1:BusDetails): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    this.baseURL = "https://localhost:5001/api/BusDetails/book-ticket?cid="+this.lgdetails.userid+"&bno="+add1.busNumber+"&seats="+this.seats+"&paystat=" + this.paystatus;
    const body=JSON.stringify(add1);
    console.log(body)
    return this.http.post(this.baseURL, body,{'headers':headers})
  }
  bookTic() {
    this.bookBusTicket(this.busdet)
      .subscribe(data => {
        if(data.any()) {
          console.log("hello");
          this.msg = "Booking Successful.";
          this.showDiv= {next :true};
        }
      })  
      this.router.navigate(['ViewTicket']);    
  }

}
