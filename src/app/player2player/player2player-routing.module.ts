import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Player2playerPage } from './player2player.page';

const routes: Routes = [
  {
    path: '',
    component: Player2playerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Player2playerPageRoutingModule {}
