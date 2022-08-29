import { __awaiter, __decorate } from "tslib";
/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
let SendSurveyPage = class SendSurveyPage {
    constructor(route, router, alertController, rest, navCtrl) {
        this.route = route;
        this.router = router;
        this.alertController = alertController;
        this.rest = rest;
        this.navCtrl = navCtrl;
        this.sendingSurvey = false;
        this.survey = [];
        this.isLoading = true;
        this.coach = JSON.parse(localStorage.getItem('user'));
        this.displayInput = false;
        this.team = [];
        this.selectedPlayers = [];
        this.playerSelectError = {
            status: false,
            message: '',
        };
        this.error = {
            status: false,
            message: '',
        };
        this.surveyarray = [];
        this.totaltime = this.route.snapshot.params["time"];
        console.log('totaltime', this.totaltime);
        // this.survey_name = this.route.snapshot.params["survey_name"];
        // console.log('survey_name',this.survey_name);
        // this.questions_list = JSON.parse(this.route.snapshot.params["questions_list"])
        // console.log('questions_list',this.questions_list);
        this.route.queryParams.subscribe((params) => {
            console.log('details', params);
            if (this.router.getCurrentNavigation().extras.state) {
                this.survey =
                    this.router.getCurrentNavigation().extras.state.selectedQuestions;
                console.log('survey question in constructor', this.survey);
                this.totaltime = this.router.getCurrentNavigation().extras.state.time;
                console.log('survey time', this.totaltime);
            }
            else {
                this.router.navigate(['create-survey']);
            }
        });
    }
    addPlayers(player, checkbox) {
        console.log('players', player);
        if (checkbox.detail.checked) {
            this.selectedPlayers.push({
                player_id: player.users_id,
                user_name: player.user_name,
            });
            console.log('selectedPlayers', this.selectedPlayers);
        }
        else {
            this.selectedPlayers = this.selectedPlayers.filter((pl) => pl.player_id !== player.users_id);
        }
    }
    getPlayers() {
        this.rest
            .getPlayers({
            requestType: 'get_player',
            coach_id: this.coach.users_id,
        })
            .subscribe((data) => {
            console.log('players', data);
            if (data.status === 'Error') {
                this.team = [];
                this.isLoading = false;
                for (const player of data.team) {
                    if (player.status === 'Active') {
                        this.team.push(player);
                    }
                }
            }
            else {
                this.team = [];
                this.isLoading = false;
                for (const player of data.team) {
                    if (player.status === 'Active') {
                        this.team.push(player);
                    }
                }
            }
        });
    }
    send() {
        if (this.selectedPlayers.length === 0) {
            this.playerSelectError.status = true;
            this.playerSelectError.message = 'Please select players!';
            setTimeout(() => {
                this.playerSelectError.status = false;
                this.playerSelectError.message = '';
            }, 3000);
        }
        else {
            this.sendingSurvey = true;
            if (this.survey) {
                if (this.survey.length >= 1) {
                    let interval = 0;
                    let that = this;
                    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
                    function sendRequestForArray(survey) {
                        console.log('sendRequestForArray run');
                        that.rest
                            .sendSurvey(Object.assign(Object.assign({ requestType: 'send_saved_surveys' }, survey), { players_list: that.selectedPlayers, coach_id: that.coach.users_id }))
                            .subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                            interval++;
                            if (interval === that.survey.length) {
                                console.log('survey send data', data);
                                that.sendingSurvey = false;
                                const alert = yield that.alertController.create({
                                    cssClass: 'sendSurvey',
                                    message: 'Your Survey is Forwarded.',
                                    backdropDismiss: false,
                                    buttons: [
                                        {
                                            text: 'Ok',
                                            handler: () => {
                                                that.navCtrl.navigateRoot('/home-coach');
                                                that.navCtrl.navigateForward('/home-coach');
                                            },
                                            cssClass: 'btn_ok',
                                        },
                                    ],
                                });
                                yield alert.present();
                                yield alert.onDidDismiss();
                            }
                            else {
                                sendRequestForArray(that.survey[interval]);
                            }
                        }), (error) => __awaiter(this, void 0, void 0, function* () {
                            that.sendingSurvey = false;
                            const alert = yield that.alertController.create({
                                message: 'Something went wrong!',
                                backdropDismiss: false,
                                buttons: [
                                    {
                                        text: 'Ok',
                                    },
                                ],
                            });
                            yield alert.present();
                            yield alert.onDidDismiss();
                        }));
                    }
                    sendRequestForArray(this.survey[interval]);
                }
                else {
                    this.sendRequest(this.survey);
                }
            }
        }
    }
    back() {
        this.navCtrl.navigateBack('/create-survey');
    }
    ngOnInit() {
        this.getPlayers();
    }
    sendRequest(survey) {
        this.rest
            .sendSurvey(Object.assign(Object.assign({ requestType: 'create_survey' }, survey), { players_list: this.selectedPlayers, coach_id: this.coach.users_id }))
            .subscribe((data) => __awaiter(this, void 0, void 0, function* () {
            console.log('survey send data', data);
            this.sendingSurvey = false;
            const alert = yield this.alertController.create({
                cssClass: 'sendSurvey',
                message: 'Your Survey is Forwarded.',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            this.navCtrl.navigateRoot('/home-coach');
                            this.navCtrl.navigateForward('/home-coach');
                        },
                        cssClass: 'btn_ok',
                    },
                ],
            });
            yield alert.present();
            yield alert.onDidDismiss();
        }), (error) => __awaiter(this, void 0, void 0, function* () {
            this.sendingSurvey = false;
            const alert = yield this.alertController.create({
                message: 'Something went wrong!',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Ok',
                    },
                ],
            });
            yield alert.present();
            yield alert.onDidDismiss();
        }));
    }
    sendRequestForArray(survey) {
    }
};
SendSurveyPage = __decorate([
    Component({
        selector: 'app-send-survey',
        templateUrl: './send-survey.page.html',
        styleUrls: ['./send-survey.page.scss'],
    })
], SendSurveyPage);
export { SendSurveyPage };
//# sourceMappingURL=send-survey.page.js.map