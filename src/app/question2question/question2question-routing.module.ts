import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question2questionPage } from './question2question.page';

const routes: Routes = [
  {
    path: '',
    component: Question2questionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question2questionPageRoutingModule {}
