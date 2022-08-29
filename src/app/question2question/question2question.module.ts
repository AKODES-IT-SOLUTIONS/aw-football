import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question2questionPageRoutingModule } from './question2question-routing.module';

import { Question2questionPage } from './question2question.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question2questionPageRoutingModule
  ],
  declarations: [Question2questionPage]
})
export class Question2questionPageModule {}
