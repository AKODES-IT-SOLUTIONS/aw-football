import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlayerSurveyPageRoutingModule } from './player-survey-routing.module';
import { PlayerSurveyPage } from './player-survey.page';
import { SelectComponent } from '../components/select/select.component';
import { ClickOutsideModule } from 'ng-click-outside';
let PlayerSurveyPageModule = class PlayerSurveyPageModule {
};
PlayerSurveyPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ClickOutsideModule,
            PlayerSurveyPageRoutingModule,
        ],
        entryComponents: [SelectComponent],
        declarations: [PlayerSurveyPage, SelectComponent],
    })
], PlayerSurveyPageModule);
export { PlayerSurveyPageModule };
//# sourceMappingURL=player-survey.module.js.map