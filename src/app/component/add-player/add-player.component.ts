import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';
import { generatedId } from 'src/app/shared/genericFunctions';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player: any = {};
  playerForm!: FormGroup;
  teamsTab: any = [];
  teamId: any;
  msg = '';
  constructor(private playerService: PlayersService,private teamService:TeamsService) { }

  ngOnInit(): void {
    // this.teamsTab = JSON.parse(localStorage.getItem("teams") || "[]");
    //get all teams from DB
    //affect all teams into teamsTab attribute
    this.teamService.getAllTeams().subscribe((res)=>{
      this.teamsTab=res.teams;
    });
  }
  addPlayer() {
    console.log("Here player objet :", this.player);
    this.player.tId=this.teamId;
    console.log("Here player objet :", this.player);
    this.playerService.addPlayer(this.player).subscribe((res) => {
      console.log("here response after add player",res.message);

    });
    // let players = JSON.parse(localStorage.getItem("players") || '[]');
    // this.player.id = generatedId(players);
    // this.player.tId = this.teamId;
    // players.push(this.player);
    // localStorage.setItem("players",JSON.stringify(players));
  }
  selectTeamId(evt: any) {
   // console.log('here team Id',evt.target.value);
    this.teamId = evt.target.value;
  }

}
