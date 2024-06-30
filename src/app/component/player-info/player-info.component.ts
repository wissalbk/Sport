import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  id! :number;
  player :any ={};
  playersTab : any = [];
  constructor(private activatedRoute:ActivatedRoute,private playerService:PlayersService) { }

  ngOnInit(): void {
    this.id =this.activatedRoute.snapshot.params['id'];
    this.playerService.getPlayerById(this.id).subscribe((res)=>{
      console.log("here player :",res.player)
      this.playersTab=res.player;
    })
  }

}
