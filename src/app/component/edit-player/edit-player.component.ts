import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  id!:number;
  player : any = {};
  editForm! :FormGroup;
  playersTab : any = [];
  constructor(private activateRoute:ActivatedRoute,private playerService:PlayersService) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
   // this.player = this.playersTab.find((m:any)=>m.id == this.id);
   this.getPLayerById();
  }
getPLayerById(){
  this.playerService.getPlayerById(this.id).subscribe((res)=>{
    this.player=res.player;
  })
}



  editPlayer(){
this.playerService.updatePlayer(this.player).subscribe((res)=>{
  console.log("Here player",this.player);
  console.log("Here response edit player",res.message);
})
  }

}
