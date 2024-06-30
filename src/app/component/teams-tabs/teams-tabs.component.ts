import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';
import { deleteById } from 'src/app/shared/genericFunctions';

@Component({
  selector: 'app-teams-tabs',
  templateUrl: './teams-tabs.component.html',
  styleUrls: ['./teams-tabs.component.css']
})
export class TeamsTabsComponent implements OnInit {
teamsTab : any = [];
  constructor(private router :Router,private teamService:TeamsService) { }

  ngOnInit() {
   // this.teamsTab = JSON.parse(localStorage.getItem('teams') || '[]');
   this.teamService.getTeamsWithPlayer().subscribe((res)=>{
    console.log("Here teams with Players :",res.teams);
    this.teamsTab=res.teams;

   })
  
  }








display(id :number){
  this.router.navigate([`teamInfo/${id}`]);
}
edit(id:number){
  this.router.navigate([`editTeam//${id}`]);
}
deleteTeam(id:number){
 // deleteById(id,'teams',this.teamsTab)

 this.teamService.deleteTeam(id).subscribe((res)=>
{
  console.log("here response after delete:",res.message);

})
}
}
