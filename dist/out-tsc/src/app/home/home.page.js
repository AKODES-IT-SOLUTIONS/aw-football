import { __decorate } from "tslib";
/* eslint-disable radix */
import { Component } from '@angular/core';
let HomePage = class HomePage {
    constructor(rest, navCtrl) {
        this.rest = rest;
        this.navCtrl = navCtrl;
        this.signalAppId = '33f6031f-46c8-4ee0-bb26-f857eea1e851';
        this.firebaseId = '809200048320';
        this.initializeApp();
    }
    initializeApp() {
        this.rest.authState.subscribe((state) => {
            if (state) {
                const user = JSON.parse(localStorage.getItem('user'));
                const accountType = localStorage.getItem('accountType');
                if (parseInt(user.roles_id) === 1) {
                    this.navCtrl.navigateRoot('/player-survey');
                }
                else if (parseInt(user.roles_id) === 2) {
                    this.navCtrl.navigateRoot('/home-coach');
                }
                else if (parseInt(user.roles_id) === 3) {
                    if (accountType === 'COACH') {
                        this.navCtrl.navigateRoot('/home-coach');
                    }
                    if (accountType === 'PLAYER') {
                        this.navCtrl.navigateRoot('/player-survey');
                    }
                }
                else {
                    this.navCtrl.navigateRoot('/home');
                }
            }
            else {
                this.navCtrl.navigateRoot('/home');
            }
        });
    }
    signin(userType) {
        const navigationExtras = {
            state: {
                user: userType,
            },
        };
        this.navCtrl.navigateForward(['signin'], navigationExtras);
    }
    check() {
        let str = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hy";
        const myArr = str.split('data:image/jpeg;base64,');
        console.log('end result', myArr[1]);
    }
};
HomePage = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    })
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map