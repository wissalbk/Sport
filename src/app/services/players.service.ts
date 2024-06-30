import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  playerUrl = 'http://localhost:3000/api/players';

  constructor(private httpClient: HttpClient) { }


  addPlayer(player: any) {
    return this.httpClient.post<{ message: any }>(this.playerUrl, player);
  }

  getAllPlayers() {
    return this.httpClient.get<{ players: any }>(this.playerUrl);
  }
  getPlayerById(id: any) {
    return this.httpClient.get<{ player: any }>(`${this.playerUrl}/${id}`)
  }
  deletePlayer(id: any) {
    return this.httpClient.delete<{ message: any }>(`${this.playerUrl}/${id}`);
  }
  updatePlayer(player: any) {
    return this.httpClient.put<{ message: any }>(this.playerUrl, player);
  }
getTeam(){
  return this.httpClient.get<{teams:any}>(this.playerUrl+'/foundedTeam')
}
getPLayersWithTeam(){
  return this.httpClient.get<{players:any}>('http://localhost:3000/api/playersTeams')
}

}
