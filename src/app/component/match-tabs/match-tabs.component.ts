import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';
import { deleteById } from 'src/app/shared/genericFunctions';

@Component({
  selector: 'app-match-tabs',
  templateUrl: './match-tabs.component.html',
  styleUrls: ['./match-tabs.component.css']
})
export class MatchTabsComponent implements OnInit {
  matchesTab: any =[];

  constructor(private router:Router,private matchService:MatchesService) { 

  }

  ngOnInit(): void {
    ///recuperer tout les donnees dans matchesTable
   // this.matchesTab =JSON.parse(localStorage.getItem('matches') || '[]');

   this.getAllMatches();
  }
getAllMatches(){
  this.matchService.getAllMatches().subscribe((res)=>{
    this.matchesTab = res.matches
  });
}






display(id :number){
  
  this.router.navigate([`matchInfo/${id}`]);
}


editMatch(id :number){
  this.router.navigate([`editMatch/${id}`]);


}

deleteMatch(id:number){
  //alert("btn delete is clicked"+id)
 // this.matchesTab=JSON.parse(localStorage.getItem('matches') || '[]');
 //rechercher position by id (findIndex) dans cette condition
 //let pos =this.matchesTab.findIndex((m:any)=> m.id == id);
 // this.matchesTab.splice(pos,1);
  //localStorage.setItem('matches',JSON.stringify(this.matchesTab));


 // deleteById(id ,'matches',this.matchesTab)
this.matchService.deleteMatch(id).subscribe((result)=>{
  console.log("here response after delete:",result.message)
 this.getAllMatches();
})


}
Messages(s1:number,s2:number){
  if (s1>s2) {
   return ['green','est le winner'];
    
  }else if(s1<s2) {
    return ['red','est le losser']
  }else{
    return ['blue','null mATCH']
  }
  }

}
