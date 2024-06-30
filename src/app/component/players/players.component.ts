import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
playersTab=[];
  constructor(private playerService:PlayersService) { }

  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe((res)=>{
this.playersTab=res.players;
    })
  }

}
