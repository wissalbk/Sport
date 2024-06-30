import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  id! :number;
  team:any={};
  teamsTab : any = [];

  constructor(private activatedRoute:ActivatedRoute,
    private teamService:TeamsService
  ) { }

  ngOnInit(): void {
    this.id =this.activatedRoute.snapshot.params['id'];
    this.teamService.getTeamById(this.id).subscribe((res)=>
      {this.team = res.team}
    )
  }

}
