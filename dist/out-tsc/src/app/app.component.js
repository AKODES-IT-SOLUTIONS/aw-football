import { __awaiter, __decorate } from "tslib";
/* eslint-disable radix */
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(oneSignal, navCtrl, router, platform, toastController, rest, alertController, playerService, coachService) {
        this.oneSignal = oneSignal;
        this.navCtrl = navCtrl;
        this.router = router;
        this.platform = platform;
        this.toastController = toastController;
        this.rest = rest;
        this.alertController = alertController;
        this.playerService = playerService;
        this.coachService = coachService;
        this.oneSignalAppId = '33f6031f-46c8-4ee0-bb26-f857eea1e851';
        this.oneSignalFirebaseId = '809200048320';
        this.oneSignal.setLogLevel({ logLevel: 6, visualLevel: 2 });
        this.oneSignal.startInit(this.oneSignalAppId, this.oneSignalFirebaseId);
        this.oneSignal.endInit();
        this.oneSignal.getIds().then((identity) => {
            this.identy = identity;
            localStorage.setItem('deviceID', this.identy.userId);
        });
        this.pushNotification();
    }
    pushNotification() {
        this.oneSignal.startInit(this.oneSignalAppId, this.oneSignalFirebaseId);
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationReceived().subscribe((data) => __awaiter(this, void 0, void 0, function* () {
            this.showNotificaton(data.payload.body);
            const user = JSON.parse(localStorage.getItem('user'));
            const accountType = localStorage.getItem('accountType');
            if (accountType === 'PLAYER') {
                if (data.payload.additionalData.type === 'add_team') {
                    this.playerService.getTeamRequest(user.users_id);
                }
                if (data.payload.additionalData.type === 'survey_received') {
                    this.playerService.surveyReady();
                }
            }
            if (accountType === 'COACH') {
                if (data.payload.additionalData.type === 'invite_response') {
                    const alert = yield this.alertController.create({
                        cssClass: 'requestAcceptReject',
                        message: data.payload.body,
                        buttons: [
                            {
                                text: 'Ok',
                                cssClass: 'btn_ok',
                            },
                        ],
                    });
                    yield alert.present();
                    yield alert.onDidDismiss();
                }
            }
        }));
        this.oneSignal.handleNotificationOpened().subscribe((data) => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (parseInt(user.roles_id) === 2) {
                if (data.notification.payload.additionalData.type === 'survey_response') {
                    this.router.navigate(['view-answers']);
                }
            }
        });
        this.oneSignal.endInit();
    }
    showNotificaton(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'AW-Football Notification',
                message: msg,
                color: 'light',
                duration: 2000,
                position: 'top',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                    },
                ],
            });
            yield toast.present();
            yield toast.onDidDismiss();
        });
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss'],
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map
