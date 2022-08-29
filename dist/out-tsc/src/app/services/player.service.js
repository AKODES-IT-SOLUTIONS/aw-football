import { __awaiter, __decorate } from "tslib";
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
let PlayerService = class PlayerService {
    constructor(route, router, rest, alertController, navCtrl) {
        this.route = route;
        this.router = router;
        this.rest = rest;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.displaySurveyStatus = false;
        this.displaySurveys = true;
        this.open = false;
        this.close = false;
        this.isLoading = false;
        this.sendingSurveyResponse = false;
        this.numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.yesNoOptions = ['YES', 'NO'];
        this.surveys = 0;
        this.surveyToAnswers = [];
        this.coachesByQuestions = [];
        this.surveyName = '';
        this.survey_response = [];
        this.allInvites = [];
    }
    send() {
        this.sendingSurveyResponse = true;
        this.rest
            .sendSurveyResponse(Object.assign({ requestType: 'surveys_response', survey_response: this.survey_response }, this.sendResponse))
            .subscribe((data) => __awaiter(this, void 0, void 0, function* () {
            this.sendingSurveyResponse = false;
            if (data.status === 'success') {
                const alert = yield this.alertController.create({
                    cssClass: 'sendSurvey',
                    message: 'Your Survey is Forwarded.',
                    backdropDismiss: false,
                    buttons: [
                        {
                            text: 'Ok',
                            handler: () => {
                                this.survey_response = [];
                                this.displaySurvey();
                            },
                            cssClass: 'btn_ok',
                        },
                    ],
                });
                yield alert.present();
                yield alert.onDidDismiss();
            }
            else {
                const alert = yield this.alertController.create({
                    cssClass: 'sendSurvey',
                    message: 'Something went wrong!',
                    backdropDismiss: false,
                    buttons: [
                        {
                            text: 'Ok',
                            handler: () => {
                                this.survey_response = [];
                                this.displaySurvey();
                            },
                            cssClass: 'btn_ok',
                        },
                    ],
                });
                yield alert.present();
                yield alert.onDidDismiss();
            }
        }));
    }
    logout() {
        this.rest.logout({
            users_id: this.player.users_id,
        });
        localStorage.removeItem('user');
        localStorage.removeItem('rememberMe');
        localStorage.removeItem('team');
        localStorage.removeItem('accountType');
        this.rest.authState.next(false);
        this.navCtrl.navigateRoot('/home');
    }
    getSurvey(id) {
        console.log('FORM NOTI', this.displaySurveyStatus);
        this.isLoading = true;
        this.rest
            .getSurvey({
            requestType: 'surveys_list',
            player_id: id,
        })
            .subscribe((data) => {
            console.log('surveys_list', data);
            this.isLoading = false;
            if (data.available_surveys.length === 0) {
                this.displaySurveyStatus = true;
                this.displaySurveys = false;
            }
            else {
                this.numberOfSurvey = data.available_surveys.length;
                this.coachesByQuestions = data.available_surveys;
                this.displaySurvey();
            }
        });
    }
    displaySurvey() {
        if (this.surveys >= this.numberOfSurvey) {
            this.surveyName = '';
            this.surveyToAnswers = [];
            this.displaySurveyStatus = true;
            this.displaySurveys = false;
            // this.isLoading = false;
        }
        else {
            if (this.coachesByQuestions[this.surveys].survey_response === 'No') {
                this.sendResponse = {
                    coach_id: this.coachesByQuestions[this.surveys].coach_id,
                    player_id: this.player.users_id,
                    surveys_id: this.coachesByQuestions[this.surveys].surveys_id,
                };
                this.surveyName = this.coachesByQuestions[this.surveys].survey_name;
                this.surveyToAnswers =
                    this.coachesByQuestions[this.surveys].questions_list;
                this.surveys++;
                console.log('displaySurvey', this.surveyToAnswers);
            }
            else {
                this.surveys++;
                this.displaySurvey();
            }
        }
    }
    getAnsByChild(questionAns) {
        const index = this.survey_response.findIndex((e) => e.question_id === questionAns.question.question_id);
        if (index === -1) {
            this.survey_response.push({
                question_id: questionAns.question.question_id,
                answer: questionAns.answer,
            });
        }
        else {
            this.survey_response[index].answer = questionAns.answer;
        }
    }
    getQuestionID(id) {
        if (this.getID === id) {
            this.getID = null;
        }
        else {
            this.getID = id;
        }
    }
    doRefresh(event) {
        setTimeout(() => {
            this.displaySurveyStatus = false;
            this.displaySurveys = true;
            this.allInvites = [];
            this.surveys = 0;
            this.coachesByQuestions = [];
            this.surveyToAnswers = [];
            this.survey_response = [];
            this.player = JSON.parse(localStorage.getItem('user'));
            console.log('userdata', this.player);
            this.getTeamRequest(this.player.users_id);
            this.getSurvey(this.player.users_id);
            event.target.complete();
        }, 1000);
    }
    getTeamRequest(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.rest
                .getTeamRequest({
                requestType: 'get_team_invites',
                player_id: id,
            })
                .subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                if (data.status === 'success') {
                    this.allInvites = data.allInvites;
                }
                if (this.allInvites.length > 0) {
                    let invites = 0;
                    for (invites; invites < this.allInvites.length; invites++) {
                        const alert = yield this.alertController.create({
                            cssClass: 'requestAlert',
                            message: `${this.allInvites[invites].coach_name} want to add you to his team!`,
                            buttons: [
                                {
                                    text: 'ACCEPT',
                                    handler: () => {
                                        this.sendInviteResponse('accepted', this.allInvites[invites].teams_id);
                                    },
                                    cssClass: 'btn_accept',
                                },
                                {
                                    text: 'REJECT',
                                    handler: () => {
                                        this.sendInviteResponse('Rejected', this.allInvites[invites].teams_id);
                                    },
                                    cssClass: 'btn_reject',
                                },
                            ],
                        });
                        yield alert.present();
                        yield alert.onDidDismiss();
                    }
                }
            }));
        });
    }
    sendInviteResponse(res, teamId) {
        this.rest
            .inviteResponse({
            requestType: 'accept_invite',
            teams_id: teamId,
            response: res,
        })
            .subscribe((data) => __awaiter(this, void 0, void 0, function* () {
            console.log(data);
        }));
    }
    surveyReady() {
        this.displaySurveyStatus = false;
        this.displaySurveys = true;
        this.allInvites = [];
        this.surveys = 0;
        this.coachesByQuestions = [];
        this.surveyToAnswers = [];
        this.survey_response = [];
        this.player = JSON.parse(localStorage.getItem('user'));
        this.getTeamRequest(this.player.users_id);
        this.getSurvey(this.player.users_id);
    }
    sendDeviceID() {
        const deviceId = localStorage.getItem('deviceID');
        const user = JSON.parse(localStorage.getItem('user'));
        this.rest
            .sendDeviceId({
            deviceID: deviceId,
            users_id: user.users_id,
        })
            .subscribe((data) => __awaiter(this, void 0, void 0, function* () {
            console.log(data);
        }));
    }
};
PlayerService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], PlayerService);
export { PlayerService };
//# sourceMappingURL=player.service.js.map