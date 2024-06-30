import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
id!:number;
team : any = {};
editForm! :FormGroup;

  constructor(private activatedRoute:ActivatedRoute,
    private teamServise:TeamsService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    //this.team = this.teamsTab.find((m:any)=>m.id == this.id);
  this.getTeamById();
  }

  getTeamById(){
    this.teamServise.getTeamById(this.id).subscribe((res)=>{
      this.team=res.team
    })
  }

editTeam(){
  this.teamServise.updateTeam(this.team).subscribe((res)=>{
    console.log('here team',this.team);
    console.log(res.message);
    this.router.navigate(['admin']);
    
  })
}
}
