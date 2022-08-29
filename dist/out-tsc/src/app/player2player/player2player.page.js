import { __decorate } from "tslib";
/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
let Player2playerPage = class Player2playerPage {
    constructor(route, router, navCtrl, rest) {
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.displayOption = false;
        this.displaySpinner = false;
        this.isLoading = true;
        this.surveyAnswer = [];
        this.displayPlayer = 0;
        this.surveyList = [];
        this.survey = '';
        this.displayPlayer = 0;
        this.surveyList = [];
        this.survey = '';
        this.surveyAnswer = [];
    }
    back() {
        this.navCtrl.navigateForward('/view-answers');
    }
    nextPlayer() {
        this.displayPlayer++;
        if (this.displayPlayer === this.surveyAnswer.length) {
            this.displayPlayer = 0;
        }
    }
    previousPlayer() {
        this.displayPlayer--;
        if (this.displayPlayer === -1) {
            this.displayPlayer = this.surveyAnswer.length - 1;
        }
    }
    toggleSelect() {
        if (!this.isLoading) {
            this.displayOption = !this.displayOption;
        }
    }
    selectSurvey(survey) {
        console.log('surveyssss', survey);
        if (survey.type) {
            this.displayOption = !this.displayOption;
            return;
        }
        this.selectedSurvey = survey;
        this.surveyAnswer = [];
        this.survey = survey.survey_name;
        this.displayOption = !this.displayOption;
        this.getAnswers(survey.surveys_id);
    }
    getAnswers(surveyID) {
        console.log('surveyssss ID', surveyID);
        this.displaySpinner = true;
        this.rest
            .getPlayersAnswer({
            requestType: 'playerToplayer',
            survey_id: surveyID,
        })
            .subscribe((data) => {
            console.log('data', data);
            this.displaySpinner = false;
            if (data.status === 'success') {
                this.surveyAnswer = data.players_response;
            }
            else {
                this.surveyAnswer = [];
            }
        });
    }
    getCoachSurvey(id) {
        console.log('coach id', id);
        this.rest
            .getCoachSurvey({
            requestType: 'coachs_surveys',
            coach_id: id,
        })
            .subscribe((data) => {
            console.log('coach id related data', data);
            this.isLoading = false;
            if (data.status === 'success') {
                this.surveyList = data.your_survey;
            }
            else {
                this.surveyList.push({
                    survey_name: 'No survey found!',
                    type: true,
                });
            }
        }, (error) => {
            this.isLoading = false;
        });
    }
    doRefresh(event) {
        setTimeout(() => {
            this.getAnswers(this.selectedSurvey.surveys_id);
            event.target.complete();
        }, 1000);
    }
    ngOnInit() {
        this.displayPlayer = 0;
        this.surveyList = [];
        this.survey = '';
        this.surveyAnswer = [];
        this.coach = JSON.parse(localStorage.getItem('user'));
        this.getCoachSurvey(this.coach.users_id);
    }
};
Player2playerPage = __decorate([
    Component({
        selector: 'app-player2player',
        templateUrl: './player2player.page.html',
        styleUrls: ['./player2player.page.scss'],
    })
], Player2playerPage);
export { Player2playerPage };
//# sourceMappingURL=player2player.page.js.map