import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBusComponent } from './add-bus/add-bus.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewticketComponent } from './viewticket/viewticket.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { AuthGuard } from './guards/auth.guard';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { BusListAdminComponent } from './bus-list-admin/bus-list-admin.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BusListComponent,
    AddBusComponent,
    RegistrationComponent,
    ViewticketComponent,
    DashboardAdminComponent,
    DashboardUserComponent,
    BookTicketComponent,
    BusListAdminComponent,
    UpdateBusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
