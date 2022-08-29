import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SendSurveyPageRoutingModule } from './send-survey-routing.module';
import { SendSurveyPage } from './send-survey.page';
let SendSurveyPageModule = class SendSurveyPageModule {
};
SendSurveyPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SendSurveyPageRoutingModule
        ],
        declarations: [SendSurveyPage]
    })
], SendSurveyPageModule);
export { SendSurveyPageModule };
//# sourceMappingURL=send-survey.module.js.map