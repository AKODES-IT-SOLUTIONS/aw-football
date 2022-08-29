import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAnswersPageRoutingModule } from './view-answers-routing.module';

import { ViewAnswersPage } from './view-answers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAnswersPageRoutingModule
  ],
  declarations: [ViewAnswersPage]
})
export class ViewAnswersPageModule {}
