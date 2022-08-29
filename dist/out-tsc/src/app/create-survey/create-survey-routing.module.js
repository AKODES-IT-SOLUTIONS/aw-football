import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateSurveyPage } from './create-survey.page';
const routes = [
    {
        path: '',
        component: CreateSurveyPage
    }
];
let CreateSurveyPageRoutingModule = class CreateSurveyPageRoutingModule {
};
CreateSurveyPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CreateSurveyPageRoutingModule);
export { CreateSurveyPageRoutingModule };
//# sourceMappingURL=create-survey-routing.module.js.map