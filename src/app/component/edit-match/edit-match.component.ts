import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  id! :any;
  match :any = {};
  matchForm!:FormGroup;


  constructor(private activatedRoute:ActivatedRoute,private matchService:MatchesService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
   // this.match = this.matchesTab.find((m:any)=>m.id == this.id);
   this.getMatchById();
  }
getMatchById(){
  this.matchService.getMatchById(this.id).subscribe((res)=>{
    this.match=res.match
  })
}

editMatch(){
this.matchService.updateMatch(this.match).subscribe((res)=>{
  console.log('here match',this.match);
  console.log(res.message);
  this.router.navigate(['admin']);
  
})
}


}
