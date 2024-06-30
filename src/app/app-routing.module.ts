import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AddMatchComponent } from './component/add-match/add-match.component';
import { AddTeamComponent } from './component/add-team/add-team.component';
import { AddPlayerComponent } from './component/add-player/add-player.component';
import { AdminComponent } from './component/admin/admin.component';
import { MatchTabsComponent } from './component/match-tabs/match-tabs.component';
import { MatchesComponent } from './component/matches/matches.component';
import { PlayersComponent } from './component/players/players.component';
import { TeamsComponent } from './component/teams/teams.component';
import { MatchInfoComponent } from './component/match-info/match-info.component';
import { TeamInfoComponent } from './component/team-info/team-info.component';
import { FormArray } from '@angular/forms';
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { SearchComponent } from './component/search/search.component';
import { EditTeamComponent } from './component/edit-team/edit-team.component';
import { PlayerInfoComponent } from './component/player-info/player-info.component';
import { EditPlayerComponent } from './component/edit-player/edit-player.component';
import { SearchTeamComponent } from './component/search-team/search-team.component';
import { ProfileComponent } from './component/profile/profile.component';
import { WeatherComponent } from './component/weather/weather.component';

const routes: Routes = [
   //http://localhost:4200
  {path: '' , component :HomeComponent },
  //http://localhost:4200/inscription
  //signup component will be displayed
  {path:"inscription",component: SignupComponent},
  {path:"signupAdmin",component: SignupComponent},///meme component our signup Admin

  //http://localhost:4200/connexion
  //login component will be displayed
  {path:"connexion", component :LoginComponent},
  {path:"addMatch" , component : AddMatchComponent},
  {path:"addTeam" , component : AddTeamComponent},
  {path:"addPlayer" , component : AddPlayerComponent},
  {path:"admin" , component :AdminComponent},
  {path :"matches", component: MatchesComponent},
  {path :"players" , component: PlayersComponent},
  {path :"Teams" , component: TeamsComponent},
  //matchinfo/2 ou matchinfo/3 ou matchinfo/param (:id)
  {path:"matchInfo/:id",component:MatchInfoComponent},
  {path:"teamInfo/:id",component:TeamInfoComponent},
  {path :"editMatch/:id",component:EditMatchComponent},
  {path:"searchMatches",component:SearchComponent},
  {path :"editTeam/:id",component:EditTeamComponent},
  {path :"playerInfo/:id",component:PlayerInfoComponent},
  {path :"editPlayer/:id",component:EditPlayerComponent},
  {path:"searchTeam",component:SearchTeamComponent},
  {path:"profile",component:ProfileComponent},
  {path:"weather",component:WeatherComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
