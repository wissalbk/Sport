import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  matchUrl='http://localhost:3000/api/matches';

  constructor(private httpClient:HttpClient) { }

  addMatch(match:any){

    return this.httpClient.post<{message:any}>(this.matchUrl,match);
  }

  getAllMatches(){
    return this.httpClient.get<{matches:any}>(this.matchUrl);

  }

  getMatchById(id:any){
    // exemple : http://localhost:3000/matches/1
    return this.httpClient.get<{match:any}>(`${this.matchUrl}/${id}`);
  }

  deleteMatch(id:any){
    return this.httpClient.delete<{message:any}>(`${this.matchUrl}/${id}`);
  }

  updateMatch(match:any){
    return this.httpClient.put<{message:any}>(this.matchUrl,match);
  }
 
}

