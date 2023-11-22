import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../service/userdata/restapi.service';
import { user } from "../service/userdata/user";

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

  constructor(private router:Router,private restapi:RestapiService){

    this.changetype=true;
    this.viewIcon=true;

    this.email="";
    this.password="";
  }

  // login(){
  //   if(this.id=="admin123@gmail.com" && this.password=="admin123"){
  //     localStorage.setItem("isAuthorized","true");
  //     this.router.navigate(['/dashboard']);
  //   }else if(this.id=="jacobjabakumar2002@gmail.com" && this.password=="jack732"){
  //     localStorage.setItem("isAuthorized","true");
  //     this.router.navigate(['/dashboard']);
  //   }else{
  //     alert('Invalid Data !');
  //   }
  // }


  ngOnInit(): void {
   this.loadUsers()
  }

  loadUsers(){
    console.log(this.restapi.getUsers());
  }


  onSubmit(){
    this.restapi.getUser(this.email);
  }


  login(){
    // console.log(model);
    // this.restapi.getUser(this.email).subscribe(
    //   (response: any) => {
    //     console.log(response);
        this.router.navigate(['/dashboard/hotel']);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
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
