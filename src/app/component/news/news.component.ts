import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  infoTab: any =[
    {ID: 1,title :'news 1' ,name :'ahmed' ,date:'01/01/2000',img:'assets/images/img_1.jpg', avatar:'assets/images/person_1.jpg'},
    {ID: 1,title :'news 2' ,name :'Med' ,date:'01/01/1966',img:'assets/images/img_2.jpg',avatar:'assets/images/person_1.jpg'},
    {ID: 1,title :'news 3' ,name :'adel' ,date:'01/01/2001',img:'assets/images/img_1.jpg',avatar:'assets/images/person_1.jpg'},
    {ID: 1,title :'news 4' ,name :'MARWEN' ,date:'01/01/2004',img:'assets/images/img_1.jpg',avatar:'assets/images/person_1.jpg'}
  
    
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
