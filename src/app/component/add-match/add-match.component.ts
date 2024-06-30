import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatchesService } from 'src/app/services/matches.service';
import { generatedId } from 'src/app/shared/genericFunctions';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  //match : objet initialement vide
match:any={}
msg:string="";
//form ID
matchForm!: FormGroup;
  constructor(private matchService:MatchesService) { }

  ngOnInit(): void {
  }
addMatch(){
  this.matchService.addMatch(this.match).subscribe((result)=>{
    console.log(result.message);
    this.msg=result.message;
    
  })
  // let matches = JSON.parse(localStorage.getItem("matches") || "[]");
  // this.match.id = generatedId(matches);
  // matches.push(this.match);
  // localStorage.setItem("matches",JSON.stringify(matches));
}

}
