import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { jwtDecode } from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
connexion :any={};
loginForm! : FormGroup;
errorMsg='';
  constructor(private userService:UsersService,private route:Router) { }

  ngOnInit(): void {
  }
  login(){
   console.log("login",this.connexion);
//res{ {user},msg}
   this.userService.login(this.connexion).subscribe((res)=>{
    //message selon condition
    console.log("Here response After Login",res.message);
     if (res.message == 'welcome') {
      sessionStorage.setItem('jwt',res.user);
     // console.log("here Token",res.user);
      let decoded :any = jwtDecode(res.user);
      console.log("here decoded :",decoded);
      if (decoded.role == 'client') {
        this.route.navigate(['']);
  
      } else {
        this.route.navigate(['admin'])
      }
     } else {
      this.errorMsg='Please check your email/pwd';
     }
   
   })
  }
}
