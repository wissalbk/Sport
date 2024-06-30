import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SignupComponent } from './component/signup/signup.component';
import { CupEventComponent } from './component/cup-event/cup-event.component';
import { ResultComponent } from './component/result/result.component';
import { NewsComponent } from './component/news/news.component';
import { StandingComponent } from './component/standing/standing.component';
import { BlogComponent } from './component/blog/blog.component';
import { InfoComponent } from './component/info/info.component';
import { ArticleComponent } from './component/article/article.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AddMatchComponent } from './component/add-match/add-match.component';
import { AddTeamComponent } from './component/add-team/add-team.component';
import { AddPlayerComponent } from './component/add-player/add-player.component';
import { AdminComponent } from './component/admin/admin.component';
import { MatchTabsComponent } from './component/match-tabs/match-tabs.component';
import { TeamsTabsComponent } from './component/teams-tabs/teams-tabs.component';
import { PlayersTabsComponent } from './component/players-tabs/players-tabs.component';
import { MatchesComponent } from './component/matches/matches.component';
import { PlayersComponent } from './component/players/players.component';
import { PlayerComponent } from './component/player/player.component';
import { TeamsComponent } from './component/teams/teams.component';
import { TeamComponent } from './component/team/team.component';
import { MatchInfoComponent } from './component/match-info/match-info.component';
import { TeamInfoComponent } from './component/team-info/team-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsterixPipe } from './pipes/asterix.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { SearchComponent } from './component/search/search.component';
import { EditTeamComponent } from './component/edit-team/edit-team.component';
import { EditPlayerComponent } from './component/edit-player/edit-player.component';
import { PlayerInfoComponent } from './component/player-info/player-info.component';
import { UsersTabComponent } from './component/users-tab/users-tab.component';
import { SearchTeamComponent } from './component/search-team/search-team.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './component/profile/profile.component';
import { WeatherComponent } from './component/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    StandingComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    LoginComponent,
    HomeComponent,
    AddMatchComponent,
    AddTeamComponent,
    AddPlayerComponent,
    AdminComponent,
    MatchTabsComponent,
    TeamsTabsComponent,
    PlayersTabsComponent,
    MatchesComponent,
    PlayersComponent,
    PlayerComponent,
    TeamsComponent,
    TeamComponent,
    MatchInfoComponent,
    TeamInfoComponent,
    AsterixPipe,
    ReversePipe,
    EditMatchComponent,
    SearchComponent,
    EditTeamComponent,
    EditPlayerComponent,
    PlayerInfoComponent,
    UsersTabComponent,
    SearchTeamComponent,
    ProfileComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
