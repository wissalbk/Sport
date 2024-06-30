import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-search-team',
  templateUrl: './search-team.component.html',
  styleUrls: ['./search-team.component.css']
})
export class SearchTeamComponent implements OnInit {
  searchTeamForm!:FormGroup;
  playersTab :any =[];
  team :any={};
  teamsTab :any =[];
  foundedPlayer : any =[];
  teamName:any;
  constructor(private fb:FormBuilder,
    private teamService:TeamsService,
    private playerService:PlayersService
  ) { }

  ngOnInit(): void {
this.teamService.getAllTeams().subscribe((res)=>{
  this.teamsTab=res.teams;
})
this.playerService.getAllPlayers().subscribe((res)=>{
  this.playersTab=res.players;
})
   // this.playersTab = JSON.parse(localStorage.getItem('players') || '[]');
    //this.teamsTab = JSON.parse(localStorage.getItem('teams') || '[]');
    this.searchTeamForm = this.fb.group({
      teamName:['',Validators.required]
    });

   
  }    
searchTeam(){
 this.teamName= this.searchTeamForm.value.teamName;

  this.team =  this.teamsTab.find((t:any)=>t.name == this.searchTeamForm.value.teamName );
  console.log("team",this.team);
  this.foundedPlayer =this.playersTab.filter((player:any)=>player.tId == this.team._id );
  console.log("players",this.foundedPlayer)

}
   


}
