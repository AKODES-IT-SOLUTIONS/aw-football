import { __decorate } from "tslib";
/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
let HomeCoachPage = class HomeCoachPage {
    constructor(route, router, rest, navCtrl) {
        this.route = route;
        this.router = router;
        this.rest = rest;
        this.navCtrl = navCtrl;
        this.sendDeviceId();
    }
    sendDeviceId() {
        const deviceId = localStorage.getItem('deviceID');
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(deviceId);
        console.log(user.users_id);
        this.rest
            .sendDeviceId({
            deviceID: deviceId,
            users_id: user.users_id,
        })
            .subscribe((data) => {
            console.log(data);
        });
    }
    logout() {
        this.rest.logout({
            users_id: this.coach.users_id,
        });
        localStorage.removeItem('user');
        localStorage.removeItem('rememberMe');
        localStorage.removeItem('team');
        localStorage.removeItem('accountType');
        this.rest.authState.next(false);
        this.navCtrl.navigateRoot('/home');
    }
    gotoTeam() {
        this.navCtrl.navigateForward('/your-team');
    }
    gotoCreateSurvey() {
        this.navCtrl.navigateForward('/create-survey');
    }
    gotoViewAnswers() {
        this.navCtrl.navigateForward('/view-answers');
    }
    ngOnInit() {
        this.coach = JSON.parse(localStorage.getItem('user'));
    }
};
HomeCoachPage = __decorate([
    Component({
        selector: 'app-home-coach',
        templateUrl: './home-coach.page.html',
        styleUrls: ['./home-coach.page.scss'],
    })
], HomeCoachPage);
export { HomeCoachPage };
//# sourceMappingURL=home-coach.page.js.map