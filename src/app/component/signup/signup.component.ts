import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { generatedId } from 'src/app/shared/genericFunctions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //form ID
  signupForm!: FormGroup;
  path!: string;
  title!: string;
  imagePreview: any;

  msg!: any;
  constructor(private fBuilder: FormBuilder,
    private router: Router,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.path = this.router.url;
    this.title = (this.path == '/inscription') ? "Signup Client" : "Signup Admin";
    console.log('Here into signup', this.path);
    this.signupForm = this.fBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      pwd: [""],

      tel: [""],
      img: [''],

    })
  }
  //Methode
  signup() {
    //reactive form
    //this.signupform.value : retour de type objet (this.signupform.value.id  =>creer un attibut ID )
    let user = this.signupForm.value;

    if (this.path == '/inscription') {
      user.role = 'client';
    } else {
      user.role = 'admin'
    }
    console.log("here user", user);
    this.userService.addUser(user, this.signupForm.value.img).subscribe((result) => {
      console.log(result.message);
      this.msg = result.message;
    });
    // let usersTab =  JSON.parse(localStorage.getItem('users') || '[]');
    // user.id =generatedId(usersTab);
    // usersTab.push(user);
    // localStorage.setItem('users',JSON.stringify(usersTab));

  }
  onImageSelected(event: Event) {
    // const file = (event.target as HTMLInputElement).files[0];
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      //affecter type file de l'attribut img du signup
      this.signupForm.patchValue({ img: file });
      //update form 
      this.signupForm.updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        //imagePreview contient path de l'image
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
