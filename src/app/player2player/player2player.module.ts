import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Player2playerPageRoutingModule } from './player2player-routing.module';

import { Player2playerPage } from './player2player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Player2playerPageRoutingModule
  ],
  declarations: [Player2playerPage]
})
export class Player2playerPageModule {}
