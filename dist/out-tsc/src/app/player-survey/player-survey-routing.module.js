import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlayerSurveyPage } from './player-survey.page';
const routes = [
    {
        path: '',
        component: PlayerSurveyPage
    }
];
let PlayerSurveyPageRoutingModule = class PlayerSurveyPageRoutingModule {
};
PlayerSurveyPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PlayerSurveyPageRoutingModule);
export { PlayerSurveyPageRoutingModule };
//# sourceMappingURL=player-survey-routing.module.js.map