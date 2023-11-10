import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  changetype:boolean;
  viewIcon:boolean;

  email:string;
  password:string;

  constructor(private router:Router){

    this.changetype=true;
    this.viewIcon=true;

    this.email="";
    this.password="";
  }

  signup(){
      this.router.navigate(['/dashboard']);
  }

  toLogin(){
    this.router.navigate(['/login']);
  }

 

  showPassword(){
    this.changetype = !this.changetype;
    this.viewIcon = !this.viewIcon;
  }

}
