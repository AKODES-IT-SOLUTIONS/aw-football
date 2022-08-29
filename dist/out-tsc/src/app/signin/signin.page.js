import { __decorate } from "tslib";
/* eslint-disable radix */
import { Component } from '@angular/core';
let SigninPage = class SigninPage {
    constructor(route, router, navCtrl, rest, oneSignal, platform) {
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.oneSignal = oneSignal;
        this.platform = platform;
        this.signalAppId = '33f6031f-46c8-4ee0-bb26-f857eea1e851';
        this.firebaseId = '809200048320';
        this.username = '';
        this.password = '';
        this.rememberMe = false;
        this.phoneId = '';
        this.usernameError = {
            status: false,
            message: '',
        };
        this.passwordError = {
            status: false,
            message: '',
        };
        this.error = {
            status: false,
            message: '',
        };
        this.isLoading = false;
        this.route.queryParams.subscribe((params) => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.userType = this.router.getCurrentNavigation().extras.state.user;
            }
            else {
                this.navCtrl.navigateBack('/home');
            }
        });
    }
    ngOnInit() {
        this.username = '';
        this.password = '';
        this.phoneId = localStorage.getItem('deviceID');
    }
    login() {
        if (this.username && this.password) {
            if (this.userType === 'COACH') {
                this.isLoading = true;
                this.rest
                    .signIn({
                    requestType: 'coach',
                    username: this.username,
                    password: this.password,
                    deviceID: this.phoneId,
                })
                    .subscribe((data) => {
                    if (data.status === 'error') {
                        this.isLoading = false;
                        this.error.status = true;
                        this.error.message = data.msg;
                        setTimeout(() => {
                            this.error.status = false;
                            this.error.message = '';
                        }, 3000);
                        return;
                    }
                    else if (data.status === 'success') {
                        this.isLoading = false;
                        this.username = '';
                        this.password = '';
                        localStorage.setItem('user', JSON.stringify(data.user_data));
                        localStorage.setItem('rememberMe', JSON.stringify(this.rememberMe));
                        localStorage.setItem('accountType', this.userType);
                        if (Object.keys(localStorage).includes('user')) {
                            if (parseInt(data.user_data.roles_id) === 3) {
                                if (this.userType === 'COACH') {
                                    this.navCtrl.navigateRoot('/home-coach');
                                }
                                if (this.userType === 'PLAYER') {
                                    this.navCtrl.navigateRoot('/player-survey');
                                }
                            }
                            if (parseInt(data.user_data.roles_id) === 2) {
                                this.navCtrl.navigateRoot('/home-coach');
                            }
                            else {
                                this.error.status = true;
                                this.error.message = 'Something went wrong!';
                                setTimeout(() => {
                                    this.error.status = false;
                                    this.error.message = '';
                                }, 3000);
                            }
                        }
                    }
                    else {
                        this.isLoading = false;
                        this.error.status = true;
                        this.error.message = 'Something went wrong!';
                        setTimeout(() => {
                            this.error.status = false;
                            this.error.message = '';
                        }, 3000);
                    }
                }, (error) => {
                    this.isLoading = false;
                    this.error.status = true;
                    this.error.message = 'Something went wrong!';
                    setTimeout(() => {
                        this.error.status = false;
                        this.error.message = '';
                    }, 3000);
                });
            }
            else if (this.userType === 'PLAYER') {
                this.isLoading = true;
                this.rest
                    .signIn({
                    requestType: 'player',
                    username: this.username,
                    password: this.password,
                    deviceID: this.phoneId,
                })
                    .subscribe((data) => {
                    if (data.status === 'error') {
                        this.isLoading = false;
                        this.error.status = true;
                        this.error.message = data.msg;
                        setTimeout(() => {
                            this.error.status = false;
                            this.error.message = '';
                        }, 3000);
                        return;
                    }
                    else if (data.status === 'success') {
                        this.username = '';
                        this.password = '';
                        this.isLoading = false;
                        localStorage.setItem('user', JSON.stringify(data.user_data));
                        localStorage.setItem('rememberMe', JSON.stringify(this.rememberMe));
                        localStorage.setItem('accountType', this.userType);
                        if (Object.keys(localStorage).includes('user')) {
                            if (parseInt(data.user_data.roles_id) === 3) {
                                if (this.userType === 'COACH') {
                                    this.navCtrl.navigateRoot('/home-coach');
                                }
                                if (this.userType === 'PLAYER') {
                                    this.navCtrl.navigateRoot('/player-survey');
                                }
                            }
                            if (parseInt(data.user_data.roles_id) === 1) {
                                this.navCtrl.navigateRoot('/player-survey');
                            }
                            else {
                                this.error.status = true;
                                this.error.message = 'Something went wrong!';
                                setTimeout(() => {
                                    this.error.status = false;
                                    this.error.message = '';
                                }, 3000);
                            }
                        }
                    }
                    else {
                        this.isLoading = false;
                        this.error.status = true;
                        this.error.message = 'Something went wrong!';
                        setTimeout(() => {
                            this.error.status = false;
                            this.error.message = '';
                        }, 3000);
                    }
                }, (error) => {
                    this.isLoading = false;
                    this.error.status = true;
                    this.error.message = 'Something went wrong!';
                    setTimeout(() => {
                        this.error.status = false;
                        this.error.message = '';
                    }, 3000);
                });
            }
            else {
                this.router.navigate(['home']);
            }
        }
        if (!this.username) {
            this.usernameError.status = true;
            this.usernameError.message = 'Username is required';
        }
        if (!this.password) {
            this.passwordError.status = true;
            this.passwordError.message = 'Password is required';
        }
        setTimeout(() => {
            this.usernameError.status = false;
            this.usernameError.message = '';
            this.passwordError.status = false;
            this.passwordError.message = '';
        }, 3000);
    }
    signupPage() {
        const navigationExtras = {
            state: {
                user: this.userType,
            },
        };
        this.navCtrl.navigateForward(['signup'], navigationExtras);
    }
    back() {
        this.navCtrl.navigateRoot('/home');
    }
    setFocusToPass(el) {
        el.setFocus();
    }
    forgotPass() {
        const navigationExtras = {
            state: {
                user: this.userType,
            },
        };
        this.navCtrl.navigateForward(['forgot-password'], navigationExtras);
    }
};
SigninPage = __decorate([
    Component({
        selector: 'app-signin',
        templateUrl: './signin.page.html',
        styleUrls: ['./signin.page.scss'],
    })
], SigninPage);
export { SigninPage };
//# sourceMappingURL=signin.page.js.map