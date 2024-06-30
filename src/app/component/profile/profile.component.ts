import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profileForm! : FormGroup;
 decoded:any;
  constructor(private formBuilder:FormBuilder,private userService:UsersService) { }

  ngOnInit(): void {
    let token = sessionStorage.getItem('jwt');
    if (token) {
      this.decoded=jwtDecode(token);
      console.log("Here token into profile :",this.decoded)
    }
    this.profileForm = this.formBuilder.group({
      tel:[""],
      oldPwd:["",[Validators.required,Validators.minLength(4),Validators.maxLength(8)]],
      newPwd:["",[Validators.required,Validators.minLength(4),Validators.maxLength(8)]],
      confPwd:["",[Validators.required,Validators.minLength(4),Validators.maxLength(8)]],
    })
  }
editProfile(){
  console.log("here object :",this.profileForm.value)
  this.profileForm.value.userId=this.decoded.id;
this.userService.editProfile(this.profileForm.value).subscribe((res)=>{
  console.log("here response update profile",res.message);
});
}
mustMatch():boolean{
  return this.profileForm.value.newPwd !=  this.profileForm.value.confPwd
}
}
