import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { BusDetails } from './Models/BusDetails';
import { Ilogin } from './Models/login';

@Injectable({
  providedIn: 'root'
})
export class BookticketService {
  lgdata:Ilogin={userid:"",password:""}
  userid:string="";
  bus:BusDetails={busNumber:"", source:"", destination:"", departureDate:new Date, travelType:"",
  returnDate:new Date, seatAvailable:0};
  constructor(private logservice: LoginService) { 
    this.lgdata = logservice.getuserdata()
  }
  bookticket(b:BusDetails) {
    this.bus = b;
  }

  getbustickdetails():BusDetails {
    return(this.bus)
  }
}
