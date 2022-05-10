import { Component, OnInit } from '@angular/core';
import { BusDetails } from '../Models/BusDetails';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {
  li:any;
  baseURL: string = "https://localhost:5001/api/BusDetails";

  addbus:BusDetails={busNumber:"", source:"",destination:"",departureDate:new Date(), travelType:"", 
  returnDate:new Date(), seatAvailable:0};
  // busNumber: string,
  //   source: string,
  //   destination: string,
  //   departureDate: Date,
  //   travelType: string,
  //   returnDate: Date,
  //   seatAvailable: number
  constructor(private http : HttpClient, private router: Router) { }

    ngOnInit():void{}

  addBus(add1:BusDetails): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(add1);
    console.log(body)
    return this.http.post(this.baseURL, body,{'headers':headers})
  }
  addBusDetails() {
    this.addBus(this.addbus)
      .subscribe(data => {
        console.log(data)
      })   
    this.router.navigate(['BusAdmin']);
  }
  

}
