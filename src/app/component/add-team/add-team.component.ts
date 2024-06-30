import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TeamsService } from 'src/app/services/teams.service';
import { generatedId } from 'src/app/shared/genericFunctions';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
@Input() obj :any;
team:any={};
msg='';

teamForm! : FormGroup;
  constructor(private teamService:TeamsService) { }

  ngOnInit(): void {
  }
addTeam(){
console.log("objet :",this.team);
this.teamService.addTeam(this.team).subscribe((result)=>{
console.log("response after adding team",result.isAdded)

});

  // let teams = JSON.parse(localStorage.getItem("teams") || "[]");
  // //generatedId FONCTION DECLARER DANS function.ts
  // this.team.id = generatedId(teams);
  // teams.push(this.team);
  // localStorage.setItem("teams",JSON.stringify(teams));
}

}
