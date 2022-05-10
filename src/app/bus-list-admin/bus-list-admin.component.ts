import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookticketService } from '../bookticket.service';
import { LoginService } from '../login.service';
import { BusDetails } from '../Models/BusDetails';
import { Ilogin } from '../Models/login';

@Component({
  selector: 'app-bus-list-admin',
  templateUrl: './bus-list-admin.component.html',
  styleUrls: ['./bus-list-admin.component.css']
})
export class BusListAdminComponent implements OnInit {
  lgdata:Ilogin={userid:"",password:""}
  li:any;
  buses:BusDetails[]=[];
  constructor(private http : HttpClient, private router: Router,private logservice: LoginService, private bser: BookticketService) { 
    this.lgdata = logservice.getuserdata()
  }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/BusDetails')
    .subscribe(Response => {
 
      // If response comes hideloader() function is called
      // to hide that loader
      if(Response){ 
        hideloader();
      }
      console.log(Response)
      this.li=Response;
      this.buses=this.li;
    });
    function hideloader(){
      document.getElementById('loading')?.style.display;}
  }
  deleteBus(bdet:BusDetails) {
    //console.log(bdet);
    this.http.delete('https://localhost:5001/api/BusDetails?busNumber='+bdet.busNumber)
    .subscribe(data => {console.log(data)});
    window.location.reload();
  }

  updateBusDetails(bdet:BusDetails) {
    this.bser.bookticket(bdet)
    this.router.navigate(['UpdateBusDetails'])
  }
  

}
