import { __decorate } from "tslib";
/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
let Question2questionPage = class Question2questionPage {
    constructor(route, router, rest, navCtrl) {
        this.route = route;
        this.router = router;
        this.rest = rest;
        this.navCtrl = navCtrl;
        this.isLoading = true;
        this.displaySpinner = false;
        this.displayOption = false;
        this.survey = '';
        this.displayQuestion = 0;
        this.surveyList = [];
        this.questionAnswer = [];
        this.displayQuestion = 0;
        this.surveyList = [];
        this.survey = '';
        this.questionAnswer = [];
    }
    nextQuestion() {
        this.displayQuestion++;
        if (this.displayQuestion === this.questionAnswer.length) {
            this.displayQuestion = 0;
        }
    }
    previousQuestion() {
        this.displayQuestion--;
        if (this.displayQuestion === -1) {
            this.displayQuestion = this.questionAnswer.length - 1;
        }
    }
    toggleSelect() {
        if (!this.isLoading) {
            this.displayOption = !this.displayOption;
        }
    }
    selectSurvey(survey) {
        if (survey.type) {
            this.displayOption = !this.displayOption;
            return;
        }
        this.selectedSurvey = survey;
        this.questionAnswer = [];
        this.survey = survey.survey_name;
        this.displayOption = !this.displayOption;
        this.getAnswers(survey.surveys_id);
    }
    back() {
        this.navCtrl.navigateForward('/view-answers');
    }
    getAnswers(surveyID) {
        this.displaySpinner = true;
        this.rest
            .getPlayersAnswer({
            requestType: 'questionToquestion',
            survey_id: surveyID,
        })
            .subscribe((data) => {
            console.log('data question2question', data);
            this.displaySpinner = false;
            if (data.status === 'success') {
                this.questionAnswer = data.question_response;
                console.log('question response array', this.questionAnswer);
            }
            else {
                this.questionAnswer = [];
                console.log('question response array in else', this.questionAnswer);
            }
        });
    }
    getCoachSurvey(id) {
        this.rest
            .getCoachSurvey({
            requestType: 'coachs_surveys',
            coach_id: id,
        })
            .subscribe((data) => {
            console.log('surveyList0', data);
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
        this.displayQuestion = 0;
        this.surveyList = [];
        this.survey = '';
        this.questionAnswer = [];
        this.coach = JSON.parse(localStorage.getItem('user'));
        this.getCoachSurvey(this.coach.users_id);
    }
};
Question2questionPage = __decorate([
    Component({
        selector: 'app-question2question',
        templateUrl: './question2question.page.html',
        styleUrls: ['./question2question.page.scss'],
    })
], Question2questionPage);
export { Question2questionPage };
//# sourceMappingURL=question2question.page.js.map