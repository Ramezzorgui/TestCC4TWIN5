import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './Team/team/team.component';


const routes: Routes = [
  {
    path: 'Show teams',
    component: TeamComponent},
    {
      path: 'Teams/team',
      component: TeamComponent},
      {path: 'Team',
    loadChildren: () =>
      import('./Team/team/team.component').then((m) => m.TeamComponent)},

  
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
