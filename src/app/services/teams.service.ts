import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  teamURL='http://localhost:3000/api/teams'

  constructor(private httpClient:HttpClient) { }

  addTeam(teamObj:any){
    return this.httpClient.post<{isAdded:boolean}>(this.teamURL,teamObj);
  }

  getAllTeams(){
    return this.httpClient.get<{teams:any}>(this.teamURL);
  }

  getTeamById(id:any){
    //http://localhost:3000/api/teams/1
    return this.httpClient.get<{team:any}>(`${this.teamURL}/${id}`); 
  }

  deleteTeam(id:any){
    return this.httpClient.delete<{message:any}>(`${this.teamURL}/${id}`);
  }

  updateTeam(teamObj:any){
return this.httpClient.put<{message:any}>(this.teamURL,teamObj);
  }
getTeamsWithPlayer(){
  return this.httpClient.get<{teams:any}>('http://localhost:3000/api/teamsPlayers')
}
}
