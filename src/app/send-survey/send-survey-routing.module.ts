import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendSurveyPage } from './send-survey.page';

const routes: Routes = [
  {
    path: '',
    component: SendSurveyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendSurveyPageRoutingModule {}
