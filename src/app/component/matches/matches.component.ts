import { Component, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matchesTab: any =[]
  constructor(private matchesService:MatchesService) { }

  ngOnInit(): void {
    this.matchesService.getAllMatches().subscribe((res)=>{
      this.matchesTab=res.matches;
    });
  }

}
