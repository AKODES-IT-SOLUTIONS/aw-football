import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourTeamPage } from './your-team.page';

const routes: Routes = [
  {
    path: '',
    component: YourTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourTeamPageRoutingModule {}
