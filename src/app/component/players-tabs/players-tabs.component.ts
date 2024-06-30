import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';
import { deleteById } from 'src/app/shared/genericFunctions';

@Component({
  selector: 'app-players-tabs',
  templateUrl: './players-tabs.component.html',
  styleUrls: ['./players-tabs.component.css']
})
export class PlayersTabsComponent implements OnInit {
  playersTab: any = [];
  teamsTab: any = [];
  foundedteams: any = {};
  teamId: any;

  constructor(private router: Router, private playerService: PlayersService,
    private teamService:TeamsService
  ) { }

  ngOnInit(): void {
 
    //  this.playersTab = JSON.parse(localStorage.getItem('players') || '[]');
    // this.teamsTab = JSON.parse(localStorage.getItem('teams') || '[]');
    this.playerService.getPLayersWithTeam().subscribe((res)=>{
      console.log("here players with Team:",res.players);
      this.playersTab=res.players;

    })
  }


 
  display(id: number) {
    this.router.navigate([`playerInfo/${id}`]);
  }
  edit(id: number) {
    this.router.navigate([`editPlayer/${id}`]);
  }
  deletePlayer(id: number) {
    // deleteById(id,'players',this.playersTab);
    this.playerService.deletePlayer(id).subscribe((res) => {
      console.log("Here response after delete :", res.message);

    })


  }

  // searchTeam(){
  //   this.playerService.getTeam().subscribe((res)=>{
  //     console.log("here teams:",res.teams);
  //     this.teamsTab=res.teams;
  //   })
  // }
  searchTeambyId(id: number) {

    return this.teamsTab.find((t: any) => t.id == id)
  }





 


}
