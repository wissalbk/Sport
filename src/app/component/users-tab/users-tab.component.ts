import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-users-tab',
  templateUrl: './users-tab.component.html',
  styleUrls: ['./users-tab.component.css']
})
export class UsersTabComponent implements OnInit {
  usersTab: any=[];

  constructor(private router:Router) {  }

  ngOnInit(): void {
   // this.usersTab = JSON.parse(localStorage.getItem('users') || '[]');
  }
  display(id:Number){}
  edit(id:number){}

}
