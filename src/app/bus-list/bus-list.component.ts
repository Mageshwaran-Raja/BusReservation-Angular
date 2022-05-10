import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BusDetails} from '../Models/BusDetails';
import { Router } from '@angular/router';
import { Ilogin } from '../Models/login';
import { LoginService } from '../login.service';
import { BookticketService } from '../bookticket.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {
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
bookticket(add1:BusDetails): void {
    this.bser.bookticket(add1)
    this.router.navigate(['Book-Ticket']);
  }

}

  
//https://localhost:5001/api/BusDetails --> post

  


