import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerSurveyPage } from './player-survey.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerSurveyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerSurveyPageRoutingModule {}
