import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusComponent } from './add-bus/add-bus.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { BusListAdminComponent } from './bus-list-admin/bus-list-admin.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { ViewticketComponent } from './viewticket/viewticket.component';

const routes: Routes = [
  {path:'Login', component:LoginComponent},
  {path:'Bus', component:BusListComponent},
  {path:'Add-Bus', component:AddBusComponent},
  {path:'Registration', component:RegistrationComponent},
  {path:'ViewTicket', component:ViewticketComponent},
  {path:'AdminDashboard', component:DashboardAdminComponent},
  {path:'Dashboard', component:DashboardUserComponent },
  {path:'Book-Ticket', component:BookTicketComponent },
  {path:'BusAdmin', component:BusListAdminComponent},
  {path: 'UpdateBusDetails', component:UpdateBusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
