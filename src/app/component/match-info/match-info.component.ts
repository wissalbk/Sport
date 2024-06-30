import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  id! :number;
  match={};
//  // matchesTab: any =[
//     {id: 1,scoreOne :0 ,scoreTwo :3 ,teamOne: 'RMD',teamTwo:'FCB'},
//     {id: 2, scoreOne :2,scoreTwo :4 ,teamOne: 'SEV',teamTwo:'ATM'},
//     {id: 3, scoreOne :3,scoreTwo : 1,teamOne: 'CIT',teamTwo:'ARS'},
//     {id: 4,scoreOne :1 ,scoreTwo :1,teamOne: 'JUV',teamTwo:'ROM'},
//   ]
//declarer attribut de type actevatedRouter :chemin actif
  constructor(private activatedRoute:ActivatedRoute,
    private mService:MatchesService) { }

  ngOnInit(): void {
//capturer le path actif selen le id dans parametre
    this.id = this.activatedRoute.snapshot.params['id'];
//fonction predefine find les element de id selectionner
   // this.match = this.matchesTab.find((m:any)=>m.id == this.id);
   this.mService.getMatchById(this.id).subscribe(
    (res)=>{this.match = res.match}
   )
  }

}
