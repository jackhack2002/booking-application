import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {


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

  login(){
    if(this.email=="admin123@gmail.com" && this.password=="admin123"){
      localStorage.setItem("isAuthorized","true");
      this.router.navigate(['/dashboard']);
    }else if(this.email=="jacobjabakumar2002@gmail.com" && this.password=="jack732"){
      localStorage.setItem("isAuthorized","true");
      this.router.navigate(['/dashboard']);
    }else{
      alert('Invalid Data !');
    }
  }

  toSignup(){
    this.router.navigate(['/signup']);
  }

 

  showPassword(){
    this.changetype = !this.changetype;
    this.viewIcon = !this.viewIcon;
  }
  
  forgotPassword(){
    alert('Password Reset ')
  }

}
