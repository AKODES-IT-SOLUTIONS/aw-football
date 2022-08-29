import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendSurveyPageRoutingModule } from './send-survey-routing.module';

import { SendSurveyPage } from './send-survey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendSurveyPageRoutingModule
  ],
  declarations: [SendSurveyPage]
})
export class SendSurveyPageModule {}
