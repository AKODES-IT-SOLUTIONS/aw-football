import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SendSurveyPage } from './send-survey.page';
const routes = [
    {
        path: '',
        component: SendSurveyPage
    }
];
let SendSurveyPageRoutingModule = class SendSurveyPageRoutingModule {
};
SendSurveyPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SendSurveyPageRoutingModule);
export { SendSurveyPageRoutingModule };
//# sourceMappingURL=send-survey-routing.module.js.map