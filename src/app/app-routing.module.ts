import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HotelComponent } from './hotel/hotel.component';
import { BookingComponent } from './booking/booking.component';
import { TravelComponent } from './travel/travel.component';
import { StarComponent } from './star/star.component';

const routes: Routes = [
  {path:'signin',component:SigninComponent},
  {path:'',redirectTo:'/signin',pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent,

  children:[
    {path:'hotel',component:HotelComponent},
    {path:'',redirectTo:'/hotel',pathMatch:'full'},
    {path:'booking',component:BookingComponent},
    {path:'travel',component:TravelComponent}
  ]

},
  {path:'login',component:SigninComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
