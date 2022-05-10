import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookticketService } from '../bookticket.service';
import { BusDetails } from '../Models/BusDetails';

@Component({
  selector: 'app-update-bus',
  templateUrl: './update-bus.component.html',
  styleUrls: ['./update-bus.component.css']
})
export class UpdateBusComponent implements OnInit {
  addbus:BusDetails={busNumber:"", source:"",destination:"",departureDate:new Date(), travelType:"", 
  returnDate:new Date(), seatAvailable:0};
  showDiv = {next:false};
  constructor(private bser: BookticketService, private http:HttpClient) {
    this.addbus = bser.getbustickdetails()
   }

  ngOnInit(): void {
  }
  updateBusDetails():void {
    const headers = { 'content-type': 'application/json'}; 
    const body=JSON.stringify(this.addbus);
    this.http.put<BusDetails>('https://localhost:5001/api/BusDetails?busNumber='+this.addbus.busNumber, body, 
    {'headers': headers}).subscribe(data=>{console.log(data)})
  }
}
