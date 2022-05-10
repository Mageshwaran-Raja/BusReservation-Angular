import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  uname:string="";
  pass:string="";
  constructor(private router: Router, private lg: LoginService) { 
    
    console.log(this.lg.getuserdata());
  }
  
  
  ngOnInit(): void {
    console.log()
  }
  viewavailablebus() {
    this.router.navigate(['BusAdmin']);
  }
  Addbus() {
    this.router.navigate(['Add-Bus']);
  }


  

}
