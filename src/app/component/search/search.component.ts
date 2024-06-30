import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm!:FormGroup;
  id! :number;
  match :any;
  foundedMatches:any = [];
  matchesTab: any =[
    {id: 1,scoreOne :0 ,scoreTwo :3 ,teamOne: 'RMD',teamTwo:'FCB'},
    {id: 2, scoreOne :2,scoreTwo :4 ,teamOne: 'SEV',teamTwo:'ATM'},
    {id: 3, scoreOne :3,scoreTwo : 1,teamOne: 'CIT',teamTwo:'ARS'},
    {id: 4,scoreOne :1 ,scoreTwo :1,teamOne: 'JUV',teamTwo:'ROM'},
  ]

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.searchForm= this.fb.group({
      score:["",[Validators.required]],
    })

  
  }
  search(){
    let scoreValue = this.searchForm.value.score;

    this.foundedMatches = this.matchesTab.filter((m:any)=> m.scoreOne==scoreValue ||  m.scoreTwo==scoreValue );
  }

}
