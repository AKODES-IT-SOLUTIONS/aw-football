import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ViewAnswersPage = class ViewAnswersPage {
    constructor(route, router, navCtrl) {
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
    }
    gotoP2P() {
        this.navCtrl.navigateForward('/player2player');
    }
    gotoQ2Q() {
        this.navCtrl.navigateForward('/question2question');
    }
    back() {
        this.navCtrl.navigateRoot('/home-coach');
        this.navCtrl.navigateForward('/home-coach');
    }
    ngOnInit() { }
};
ViewAnswersPage = __decorate([
    Component({
        selector: 'app-view-answers',
        templateUrl: './view-answers.page.html',
        styleUrls: ['./view-answers.page.scss'],
    })
], ViewAnswersPage);
export { ViewAnswersPage };
//# sourceMappingURL=view-answers.page.js.map