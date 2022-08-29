import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourTeamPageRoutingModule } from './your-team-routing.module';

import { YourTeamPage } from './your-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourTeamPageRoutingModule
  ],
  declarations: [YourTeamPage]
})
export class YourTeamPageModule {}
