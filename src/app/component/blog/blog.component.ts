import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() obj:any;
articleTab :any =[
  {img:'assets/images/img_2.jpg',date:'04/04/2024',title:'title 1',description:'descr1'},
  {img:'assets/images/img_2.jpg',date:'04/04/2024',title:'title 2',description:'descr2'},
  {img:'assets/images/img_2.jpg',date:'04/04/2024',title:'title 3',description:'descr3'},
 {img:'assets/images/img_2.jpg',date:'04/04/2024',title:'title 4',description:'descr4'},
 {img:'assets/images/img_2.jpg',date:'04/04/2024',title:'title 5',description:'descr5'}
] 


  constructor() { }

  ngOnInit(): void {
  }

}
