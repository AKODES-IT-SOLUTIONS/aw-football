import { __decorate } from "tslib";
/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
let PlayerSurveyPage = class PlayerSurveyPage {
    constructor(playerService) {
        this.playerService = playerService;
    }
    ngOnInit() {
        this.playerService.sendDeviceID();
        this.playerService.surveyReady();
    }
};
PlayerSurveyPage = __decorate([
    Component({
        selector: 'app-player-survey',
        templateUrl: './player-survey.page.html',
        styleUrls: ['./player-survey.page.scss'],
    })
], PlayerSurveyPage);
export { PlayerSurveyPage };
//# sourceMappingURL=player-survey.page.js.map