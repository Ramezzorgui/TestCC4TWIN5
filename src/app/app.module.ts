import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { TeamsComponent } from './Team/teams/teams.component';
import { TeamComponent } from './Team/team/team.component';
import { FormTeamComponent } from './Team/form-team/form-team.component';
import { MyTeamsComponent } from './Team/my-teams/my-teams.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    TeamsComponent,
    TeamComponent,
    FormTeamComponent,
    MyTeamsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
